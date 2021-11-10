import React from 'react';
/* eslint-disable */
import { Grid } from '@mui/material';
import FavoriteItem from './FavoriteItem';

const FavoriteTableCharacter = ({ items }) => (
  <>
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      {items && items.map((item) => <FavoriteItem key={item.id} item={item} />)}
    </Grid>

  </>
);

export default FavoriteTableCharacter;
