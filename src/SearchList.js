import React, { useEffect, useState } from 'react';
import { News } from './News';

export function SearchList(props) {
  const keyword = props.keyword;
  const call = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&sort=newest&api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK`;

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
    return (
      <div className="searchList">
        <h2>results for: {keyword}</h2>
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
}
