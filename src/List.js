import React, { useEffect, useState } from 'react';
import { News } from './News';

export function List(props) {
  const call = props.call;
  const title = props.title;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(call)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results.splice(10));
          console.log(result);
          console.log(result.results[0]);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [call]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>{title}</h2>
        <hr></hr>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <News data={item} />
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
