import ReactDOM from 'react-dom';
import Search from './components/search';
import React from 'react';

let search = (searchText) => {
  window.location.href = `http://www.google.com/search?q=${searchText}`;
};
ReactDOM.render(
  <div>
    <Search onSearch={search}></Search>
  </div>,
  document.getElementById('root')
);
