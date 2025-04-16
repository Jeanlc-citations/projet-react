import React from 'react';
import EventCard from './EventCard.jsx';
import Events from '../data/Events.js';
// import React, { useState } from 'react';


function pages() {
  return (
    <div>
      <h2>Frise chronologique</h2>
      {Events.map((event, index) => (
        <EventCard key={index} year={event.date} title={event.title} description={event.description}/>
      ))}
    </div>
  );
}

export default pages;

