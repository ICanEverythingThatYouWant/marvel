import React, { useState } from 'react';
import './Seacrh.css';
import PropTypes from 'prop-types';

const Search = ({ search }) => {
  const [text, setText] = useState('');

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Find a hero"
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </form>
    </section>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Search;
