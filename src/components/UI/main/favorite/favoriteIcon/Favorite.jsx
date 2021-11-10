import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon from '../../../../img/favoriteLogo.svg';
import styles from './Favorite.module.css';

const Favorite = () => {
  const favouriteList = useSelector((state) => state.favoriteReducer.favorites);

  return (
    <div>
      <Link to="/favorites">
        {favouriteList.length > 0 ? <span className={styles.counter}>{favouriteList.length}</span> : ''}
        <img className={styles.icon} src={icon} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
