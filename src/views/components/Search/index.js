import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import searchActions from "../../../actions/searchActions";
import Spinner from "../../../uilib/Spinner";
import { Container, Box, Typography, Snackbar, Alert } from "@mui/material";
import MovieList from "../../../uilib/MovieList";

function Search({ search, searchMovies, clearSearchText }) {
  const params = useParams();
  const navigate = useNavigate();

  const handelPageChange = (e, page) => {
    navigate(`/search/${params.query}/${page}`);
  };

  useEffect(() => {
    const { query, page = "1" } = params;
    searchMovies({ query, page });
  }, [params.query, params.page]);

  useEffect(() => {
    return () => {
      clearSearchText("")
    }
  }, [])

  return search.loading || (!search.data && !search.error) ? (
    <Spinner />
  ) : (
    <Container>
      <Box mt="100px" mb="20px">
        <Typography variant="h5">
          {`Search Results: "${params.query}"`}
        </Typography>
      </Box>
      {search.error ? (
        <Snackbar open={true}>
          <Alert severity="error">{search.error.message}</Alert>
        </Snackbar>
      ) : search.data?.results.length ? (
        <MovieList
          list={search.data.results}
          page={search.data.page}
          totalPages={search.data.total_pages}
          onPageChange={handelPageChange}
        />
      ) : (
        ""
      )}
    </Container>
  );
}

const mapStateToProps = ({ searchReducer }) => ({
  search: searchReducer.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies: ({ query, page = 1 }) =>
    dispatch(searchActions.searchMovies({ query, page })),
  clearSearchText: (text) => dispatch(searchActions.setSearchText({text}))
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
