import React from 'react'
import { Typography } from '@mui/material'

function MovieRating({
    rating
}) {
  return (
    <Typography sx={{
        width: '32px',
        height: '32px',
        fontSize: '0.8rem',
        border: '1px solid yellow',
        borderRadius: '50%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    }} noWrap gutterBottom variant="body2" component="div">
      {rating}
     </Typography>
  )
}

export default MovieRating