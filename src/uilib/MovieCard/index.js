import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import ResponsiveEllipsis from "../ResponsiveEllipsis";
import MovieRating from "../MovieRating";
import { TMDB_IMG_URL, PLACEHOLDER_IMG_URL } from "../../helpers/constants";
import { useNavigate } from 'react-router-dom'

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const imageUrl = movie.poster_path
    ? `${TMDB_IMG_URL.medium}${movie.poster_path}`
    : PLACEHOLDER_IMG_URL.medium;

  return (
    <Card sx={{ maxWidth: 200, height: '100%' }}>
      <CardActionArea
        href={`/movie/${movie.id}`}
        onClick={(e) => {
          e.preventDefault()
          navigate(`/movie/${movie.id}`)
        }}
        sx={{
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "space-between",
        }}
        title={movie.title}
      >
        <CardMedia
          component="img"
          sx={{height: 300 }}
          image={imageUrl}
          alt={movie.title}
        />
        <CardContent sx={{
            width: "calc(100% - 20px)",
            pr: 0,
            pl: 0 
        }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row nowrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography noWrap mr={'10px'} gutterBottom variant="body1" component="div">
              {movie.title}
            </Typography>
            <MovieRating rating={movie.vote_average } />
          </Box>
          <Typography sx={{minHeight: '41px'}} variant="body2" color="text.secondary" component="div">
            <ResponsiveEllipsis
              maxLine={2}
              ellipsis="..."
              text={movie.overview}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
