import React, { useEffect } from "react";
import { connect } from "react-redux";
import movieActions from "../../../actions/movieActions";
import Spinner from "../../../uilib/Spinner";
import {
  Container,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Snackbar,
  Alert,
} from "@mui/material";
import MovieList from "../../../uilib/MovieList";
import { useNavigate, useParams, useMatch } from "react-router-dom";

function Home({ movies, getMovies }) {
  const navigate = useNavigate();
  const params = useParams();
  const match = useMatch("/:filter/*");

  const { filter = "upcoming" } = match ? match.params : {};
  const { page = 1 } = params;

  const handelPageChange = (e, page) => {
    navigate(`/${filter}/${page}`);
    window.scrollTo(0, 0);
  };

  const handelFilterChange = (e, value) => {
    navigate(`/${value}`);
  };

  useEffect(() => {
    getMovies({ filter, page });
  }, [page, filter]);
  return (
    <Container>
      <Box mt="100px" mb="50px">
        <ToggleButtonGroup
          color="primary"
          value={filter}
          exclusive
          onChange={handelFilterChange}
        >
          <ToggleButton value="upcoming">Upcoming</ToggleButton>
          <ToggleButton value="top_rated">Top Rated</ToggleButton>
          <ToggleButton value="now_playing">Now Playing</ToggleButton>
          <ToggleButton value="popular">Popular</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {movies.loading || (!movies.data && !movies.error) ? (
        <Spinner />
      ) : movies.error ? (
        <Snackbar open={true}>
          <Alert severity="error">{movies.error.message}</Alert>
        </Snackbar>
      ) : (
        <MovieList
          list={movies.data.results}
          page={movies.data.page}
          totalPages={movies.data.total_pages}
          onPageChange={handelPageChange}
        />
      )}
    </Container>
  );
}

const mapStateToProps = ({ movieReducer }) => ({
  movies: movieReducer.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: ({ filter, page = 1 }) =>
    dispatch(movieActions.getMovies({ filter, page })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
