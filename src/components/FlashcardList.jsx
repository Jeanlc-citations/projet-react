import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

function FlashcardList() {
  const [events, setEvents] = useState([]);
  const [periodFilter, setPeriodFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/data/Events.json')
      .then(res => res.json())
      .then(data => {
        console.log("✅ Données chargées :", data);
        setEvents(data);
      })
      .catch(err => console.error("❌ Erreur fetch :", err));
  }, []);

  const filteredEvents = events
    .filter(event =>
      periodFilter ? event.period === periodFilter : true
    )
    .filter(event =>
      difficultyFilter ? event.difficulty === difficultyFilter : true
    )
    .filter(event =>
      event.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <h1 className="title">Toutes les dates</h1>
      {/* Filtres + recherche ici */}
      <div className="flashcards-container">
        {filteredEvents.map(event => (
          <Flashcard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default FlashcardList;
