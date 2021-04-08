import React, { useEffect, useState } from 'react';

const getCall = (value) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&sort=newest&api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK`;

export const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(getCall(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Search..."
      />
      <input type="submit" value="Search" />
    </form>
  );
};
