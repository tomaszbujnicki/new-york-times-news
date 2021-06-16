import React, { useState } from 'react';
import { NewsBoard } from './NewsBoard';
import { Search } from './Search';
import { SearchList } from './SearchList';

export const App = () => {
  const [keyword, setKeyword] = useState('');

  const changeKeyword = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div>
      <h1>New York Times News</h1>
      <Search onSubmit={changeKeyword} />
      {keyword ? <SearchList keyword={keyword} /> : <NewsBoard />}
    </div>
  );
};
