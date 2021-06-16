import React from 'react';
import { News } from './News';

export function List(props) {
  const title = props.title;
  const items = props.items;

  return (
    <div>
      <h2>{title}</h2>
      <hr></hr>
      <ul>
        {items.map((item) => (
          <li key={item.id || item._id}>
            <News data={item} />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
