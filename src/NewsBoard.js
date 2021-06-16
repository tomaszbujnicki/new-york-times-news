import React from 'react';
import { ListContainer } from './ListContainer';

const call = {
  emailed:
    'https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
  shared:
    'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
  viewed:
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=mZMSXI9udyHWr7GXT8IyjNlD5JvWeeDK',
};

export const NewsBoard = () => {
  return (
    <div className="grid">
      <ListContainer title="Top 10 emailed news" call={call.emailed} />
      <ListContainer title="Top 10 shared news" call={call.shared} />
      <ListContainer title="Top 10 viewed news" call={call.viewed} />
    </div>
  );
};
