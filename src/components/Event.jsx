import React from 'react';


function Event({ year, title, description, link, imgUrl }) {
  return (
    <div>
        <img src={imgUrl} alt={title} />
        <h3> {title} </h3>
        <h4> {year} </h4>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">En savoir plus</a>
    </div>
  );
}

export default Event;

