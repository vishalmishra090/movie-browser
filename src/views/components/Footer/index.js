import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
      <Typography variant="body2" component='footer' sx={{
        padding: '10px',
        textAlign: 'center'
      }} >
        Made by{" "}
        <a href="https://github.com/vishalmishra090" target="_blank">
          Vishal Mishra
        </a>
      </Typography>
  );
}

export default Footer;
