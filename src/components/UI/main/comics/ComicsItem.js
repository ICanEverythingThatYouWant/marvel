import React from 'react';
import './ComicsItem.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { removePersonFromFavorite, setPersonToFavorite } from '../../../../store/actions';
import favoriteIconFill from '../../../img/favorite-icon-fill.svg';
import favoriteIcon from '../../../img/favorite-icon.svg';
/* eslint-disable */
const ComicsItem = ({ item }) => {
  const favouriteList = useSelector((state) => state.favoriteReducer.favorites);
  const isFavorite = favouriteList.some((r) => r.id === item.id);
  const dispatch = useDispatch();
  console.log(item);
  const Person = {

    personId: item.id,
    personName: item.title,
    personPhoto: item.thumbnail?.path ? item.thumbnail?.path : item.img,
  };

  const dispatchGetHeroes = () => {
    dispatch(setPersonToFavorite(item));
  };

  const dispatchDeleteHeroes = () => {
    dispatch(removePersonFromFavorite(
      Person.personId,
    ));
  };

  return (
    <div className="content-carousel">
      <div className="content-inner">
        <div>
          <img className="content-image" src={`${Person.personPhoto}/portrait_xlarge.jpg`} alt="" align="left" />
        </div>
        <div className="">
          <h1 className="header-item">{`comics number: ${item.id}`}</h1>
          <ul>
              <strong>Name:</strong>
              {' '}
              {item.title}
          </ul>

          {isFavorite ? (
            <img
              src={favoriteIconFill}
              onClick={dispatchDeleteHeroes}
              className="favorite-iconComics"
              alt="add to favorite"
            />
          ) : (
            <img
              src={favoriteIcon}
              onClick={dispatchGetHeroes}
              className="favorite-iconComics"
              alt="add to favorite"
            />
          )}

        </div>
      </div>
    </div>

  );
};

ComicsItem.propTypes = {
  personFavorite: PropTypes.bool,
  setPersonToFavorite: PropTypes.func,
};

export default ComicsItem;
