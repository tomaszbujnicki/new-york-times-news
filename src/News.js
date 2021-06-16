import React from 'react';
import defaultImg from './nyt-default.png';

const getImage = (media) => {
  if (media[0]) {
    return media[0]['media-metadata']
      ? getImageNormal(media[0]['media-metadata'])
      : getImageStatic(media);
  } else {
    return defaultImg;
  }
};

const getImageNormal = (media) => {
  const arr = media;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].format === 'mediumThreeByTwo440') {
      return arr[i].url;
    }
  }
};

const getImageStatic = (media) => {
  const arr = media;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].subtype === 'mediumThreeByTwo440') {
      return 'https://static01.nyt.com/' + arr[i].url;
    }
  }
};

export const News = (props) => {
  const title = props.data.title || props.data.headline.main;
  const text = props.data.abstract;
  const link = props.data.url || props.data.web_url;
  const img = getImage(props.data.media || props.data.multimedia);

  return (
    <article className="mid">
      <a href={link}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </a>
    </article>
  );
};
