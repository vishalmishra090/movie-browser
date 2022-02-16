import React from 'react'
import { Box, CircularProgress } from '@mui/material'

function Spinner({
    height='75vh'
}) {
  return (
    <Box sx={{
        display: 'flex',
        height,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <CircularProgress />
    </Box>
  )
}

export default Spinner