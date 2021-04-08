import React from 'react';
import { List } from './List';
import { Search } from './Search';

const call = {
  emailed:
    'https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
  shared:
    'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
  viewed:
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
};

export const App = () => {
  return (
    <div>
      <h1>New York Times News</h1>
      <Search />
      <div className="grid">
        <List title="Top 10 emailed news" call={call.emailed} />
        <List title="Top 10 shared news" call={call.shared} />
        <List title="Top 10 viewed news" call={call.viewed} />
      </div>
    </div>
  );
};
