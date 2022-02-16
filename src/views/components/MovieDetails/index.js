import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import movieActions from "../../../actions/movieActions";
import Spinner from "../../../uilib/Spinner";
import {
  Container,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  getDirectorsNameList,
  getActorsNameList,
} from "../../../helpers/movie";
import MovieRating from "../../../uilib/MovieRating";
import ResponsiveEllipsis from "../../../uilib/ResponsiveEllipsis";
import { TMDB_IMG_URL, PLACEHOLDER_IMG_URL } from "../../../helpers/constants";

import "./style.scss";

function MovieDetails({ movie, getMovie, credits, getCredits }) {
  const params = useParams();

  useEffect(() => {
    const { movieId } = params;
    getMovie({ id: movieId });
    getCredits({ id: movieId });
  }, []);

  const imageUrl = movie.data?.poster_path
    ? `${TMDB_IMG_URL.medium}${movie.data.poster_path}`
    : PLACEHOLDER_IMG_URL.medium;

  return movie.loading ||
    credits.loading ||
    (!credits.data && !credits.error) ||
    (!movie.data && !movie.error) ? (
    <Spinner />
  ) : credits.error || movie.error ? (
    <Snackbar open={true}>
      <Alert severity="error">
        {credits.error?.message || movie.error?.message}
      </Alert>
    </Snackbar>
  ) : (
    <Container>
      <Box className="movie-details">
        <Box mb="20px" className="movie-details-img">
          <img
            src={imageUrl}
            alt={movie.data.title}
            style={{ height: "300px" }}
          />
        </Box>
        <Box className="movie-details-content">
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: "5px",
            }}
          >
            <Typography variant="h3" mr="15px">
              {movie.data.title}
            </Typography>
            <MovieRating rating={movie.data.vote_average} />
          </Box>

          <Typography mb="30px" variant="body2" component="div">
            <span>{movie.data.release_date}</span>
            <span> | </span>
            <span>{`${movie.data.runtime} min`}</span>
            <span> | </span>
            <span>{getDirectorsNameList(credits.data.crew).join(", ")}</span>
          </Typography>
          <Typography mb="20px" variant="body2" component="div">
            <Box mr="5px">
              <b>Cast: </b>
            </Box>
            <ResponsiveEllipsis
              text={getActorsNameList(credits.data.cast).join(", ")}
              trimRight
              maxLine={1}
            />
          </Typography>
          <Typography variant="body1" component="div">
            <Box mr="5px">
              <b>Overview: </b>
            </Box>
            {movie.data.overview}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const mapStateToProps = ({ movieReducer }) => ({
  movie: movieReducer.movie,
  credits: movieReducer.credits,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: ({ id }) => dispatch(movieActions.getMovie({ id })),
  getCredits: ({ id }) => dispatch(movieActions.getCredits({ id })),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
