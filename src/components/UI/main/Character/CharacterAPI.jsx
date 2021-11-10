import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterTable from './CharacterTable';
import Search from '../../../Search/Seacrh';
import { Pagination } from '../../../Pagination/Pagination';
/* eslint-disable */
const CharacterAPI = () => {
  const hash = 'e5ae61907640d6909c3c7f3069fcfbbb';

  {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const pageArray = [];
    for (let i = 0; i < totalPages; i++) {
      pageArray.push(i + 1);
    }

    console.log(pageArray);
    useEffect(() => {
      const localStorSetItems = async () => {
        try {
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=100&apikey=cfbf8d4df78b945360d8256fe49e446a&hash=${hash}`);
          localStorage.setItem('heroes', JSON.stringify(result.data.data.results));
        } catch (e) {
          console.error(e);
        }
      };
      localStorSetItems();
    }, []);

    useEffect(() => {
      const getAll = async () => {
        try {
          if (!query) {
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=100&apikey=cfbf8d4df78b945360d8256fe49e446a&hash=${hash}`);
            setItems(result.data.data.results);
            setTotalPages(Pagination(postsPerPage, result.data.data.results.length));
            setLoading(false);
          } else {
            setLoading(true);
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=100&apikey=cfbf8d4df78b945360d8256fe49e446a&hash=${hash}`);
            setItems(result.data.data.results);
            setTotalPages(Pagination(postsPerPage, result.data.data.results.length));
            setLoading(false);
          }
        } catch (e) {
          console.error(e);
        }
      };
      getAll();
    }, [query]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    return (

      <div className="App-main">

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
        <Search search={(q) => setQuery(q)} />
        <CharacterTable items={currentPosts} isLoading={isLoading} />
      </div>
    );
  }
};
export default CharacterAPI;
