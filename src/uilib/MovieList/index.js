import React from "react";
import MovieCard from "../MovieCard";
import { Box, Grid, Pagination } from "@mui/material";

function MovieList({ list, page, totalPages, onPageChange }) {
  return (
    <Box>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        {list.map((movie, index) => (
          <Grid item key={index}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{
          display:'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 0 30px'
      }}>
         <Pagination count={ totalPages > 500 ? 500 : totalPages } page={page} shape="rounded" onChange={(e, page) => onPageChange(e, page)}/>
      </Box>
    </Box>
  );
}

export default MovieList;
