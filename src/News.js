import React from 'react';
import defaultImg from './nyt-default.png';

const getImage = (media) => {
  console.log(media);
  if (media[0]) {
    const arr = media[0]['media-metadata'];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].format === 'mediumThreeByTwo440') {
        return arr[i].url;
      }
    }
  }

  return defaultImg;
};

export const News = (props) => {
  const title = props.data.title;
  const abstract = props.data.abstract;
  const link = props.data.url;
  const img = getImage(props.data.media);

  return (
    <article>
      <a href={link}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{abstract}</p>
      </a>
    </article>
  );
};
