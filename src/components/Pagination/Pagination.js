import './Pagination.css';

export const Pagination = (postsPerPage, totalPosts) => (
  Math.ceil(totalPosts / postsPerPage)
);

export const getPagesArray = (totalPages) => {
  const pageArray = [];
  for (let i = 0; i < totalPages; i + 1) {
    pageArray.push(i + 1);
  }
  return pageArray;
};
