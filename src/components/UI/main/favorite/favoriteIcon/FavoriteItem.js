/* eslint-disable */
import React, { useState } from 'react';
import favoriteIconFill from '../../../../img/favorite-icon-fill.svg';
import './Favorite.module.css';
import { useDispatch } from 'react-redux';
import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import { removePersonFromFavorite } from '../../../../../store/actions';

const FavoriteItem = ({ item }) => {
  const [personFavorite, setPersonFavorite] = useState(true);
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(removePersonFromFavorite(item.id));
  };

  const style = {
    iconDelete: {
      position: 'absolute',
      top: '190px',
      right: '-15px',
      paddingTop: '10px',
      width: '40px',
      height: '40px',
      objectFit: 'cover',
      filter: 'drop-shadow(0px 0px 3px #1ce90e)',
      cursor: 'pointer',
    },
  };

  const Person = {

    personId: item.id,
    personName: item.name,
    personDescription: item.description || item.title,
    personPhoto: item.thumbnail?.path ? item.thumbnail?.path : item.img,
    personFavorite,
    setPersonFavorite,
    isFavorite: personFavorite,
  };
  item.isFavorite = personFavorite;

  console.log(Person.personDescription);

  return (
    <Grid item sx={{ position: 'relative' }}>
      <Card sx={{
        marginTop: 2,
        width: 200,
        height: '190px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'radial-gradient(\n'
                    + '                    rgb(202, 67, 67),\n'
                    + '                    black\n'
                    + '            ),\n'
                    + '            repeating-linear-gradient(\n'
                    + '                    transparent 0,\n'
                    + '                    rgba(0,0,0,.2) 3px,\n'
                    + '                    transparent 6px\n'
                    + '            );',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        color: 'white',
      }}
      >


        <CardMedia
          component="img"
          height="180"

          sx={{ width: '110px', marginLeft: '5px' }}
          image={`${Person.personPhoto}/portrait_xlarge.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" sx={{ color: 'white', }}>
            {item.name}
          </Typography>
          <Typography  color="text.secondary" sx={{ color: 'white', fontSize: '12px' }}>
            {item.title }
          </Typography>
          <img
            src={favoriteIconFill}
            onClick={handleClickDelete}
            style={style.iconDelete}
            alt="add to favorite"
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FavoriteItem;
