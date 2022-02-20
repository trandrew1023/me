import { React, useEffect } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Typography,
}
  from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import imageChicken from '../static/images/chick.png';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog - Trandrew';
    window.scrollTo(0, 0);
  });

  return (
    <Box>
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '80vh',
        }}
      >
        <Grid item xs={12}>
          <Avatar src={imageChicken} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Hi Again!</Typography>
        </Grid>
        <Grid item xs={6}>
          <PrecisionManufacturingIcon fontSize="large" />
        </Grid>
        <Grid item xs={6}>
          <Typography>Work in progress. Please come back soon!</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}