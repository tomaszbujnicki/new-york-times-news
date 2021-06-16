import React, { useEffect, useState } from 'react';
import { List } from './List';

export function ListContainer(props) {
  const call = props.call;
  const title = props.title;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(call)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          const data = result.results || result.response.docs;
          data.splice(10);
          setItems(data);
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
    return <List title={title} items={items} />;
  }
}
