import React from 'react';
import './CharacterItem.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '../../../../store/actions/index';
import favoriteIconFill from '../../../img/favorite-icon-fill.svg';
import favoriteIcon from '../../../img/favorite-icon.svg';
/* eslint-disable */
const CharacterItem = ({ item }) => {
  const favouriteList = useSelector((state) => state.favoriteReducer.favorites);
  const isFavorite = favouriteList.some((r) => r.id === item.id);

  const dispatch = useDispatch();

  const Person = {

    personId: item.id,
    personName: item.name,
    personDescription: item.description,
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
    <div className={!item.isFavorite ? 'content hide' : 'content'}>
      <div className="content-inner">
        <div className="content-front">
          <img
            className="image-character"
            src={`${Person.personPhoto}/portrait_xlarge.jpg`}
            alt=""
            align="left"
          />
        </div>
        <div className="content-back">
          <h1 className="header-item">{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong>
              {' '}
              {item.name}
            </li>
            <li>
              <strong className="text-content">
                Description:
                {item.description}
              </strong>
            </li>
          </ul>

          {isFavorite ? (
            <img
              src={favoriteIconFill}
              onClick={dispatchDeleteHeroes}
              className="favorite-icon"
              alt="add to favorite"
            />
          ) : (
            <img
              src={favoriteIcon}
              onClick={dispatchGetHeroes}
              className="favorite-icon"
              alt="add to favorite"
            />
          )}
        </div>
      </div>
    </div>
  );
};

CharacterItem.propTypes = {
  personFavorite: PropTypes.bool,
  setPersonToFavorite: PropTypes.func,
};

export default CharacterItem;
