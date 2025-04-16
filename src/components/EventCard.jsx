import React from 'react';
import "./DogCard.css";

function EventCard({ year, title, description, link }) {
  return (
    <div id="dog-card">
      <br></br>
      <a href={link}> {title}</a>
      <h4> {year} </h4>
      <p className="dog-description-line">{description}</p>
      <br></br>
    </div>
  );
}

export default EventCard;

