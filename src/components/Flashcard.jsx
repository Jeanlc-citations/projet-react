import React, { useState } from 'react';

const Flashcard = ({ event }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""} fade-in`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-front">
        <h3>{event.date}</h3>
        <img src={event.image} alt={event.title} />
      </div>
      <div className="flashcard-back">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default Flashcard;
