import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteTableCharacter from './FavoriteTableCharacter';
import { Pagination } from '../../../../Pagination/Pagination';
/* eslint-disable */
const FavoriteApi = () => {
  const favouriteList = useSelector((state) => state.favoriteReducer.favorites);

  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pageArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i + 1);
  }

  useEffect(() => {
    setTotalPages(Pagination(postsPerPage, favouriteList.length));
  }, [favouriteList.length]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = favouriteList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="content-pagination">
        {pageArray.map((z) => (
          <span
            onClick={() => setCurrentPage(z)}
            key={z}
            className={currentPage === z ? 'page page-current' : 'page'}
          >
            {z}
          </span>
        ))}
      </div>
      <FavoriteTableCharacter items={currentPosts} />
    </>
  );
};

export default FavoriteApi;
