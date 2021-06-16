import React, { useState } from 'react';

export const Search = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(value);
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
