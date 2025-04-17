import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

function FlashcardList() {
  const [events, setEvents] = useState([]);
  const [periodFilter, setPeriodFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isChrono, setIsChrono] = useState(false); // ✅ nouveau : case à cocher

  useEffect(() => {
    fetch('/data/Events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
      })
      .catch(err => console.error("❌ Erreur fetch :", err));
  }, []);

  const parseDate = (str) => {
    const year = parseInt(str);
    return isNaN(year) ? 0 : year;
  };

  const filteredEvents = events
    .filter(event =>
      periodFilter ? event.period === periodFilter : true
    )
    .filter(event =>
      difficultyFilter ? event.difficulty === difficultyFilter : true
    )
    .filter(event =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );

  // ✅ Tri uniquement si la case est cochée
  const displayedEvents = [...filteredEvents];
  if (isChrono) {
    displayedEvents.sort((a, b) => parseDate(a.date) - parseDate(b.date));
  } else {
    displayedEvents.sort(() => 0.5 - Math.random());
  }

  return (
    <div>
      <h1 className="title">Toutes les dates</h1>

      {/* Barre de recherche centrée */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Rechercher un événement..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            width: "60%",
            maxWidth: "500px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Filtres + case à cocher */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "15px",
        marginBottom: "20px"
      }}>
        <select value={periodFilter} onChange={(e) => setPeriodFilter(e.target.value)}>
          <option value="">Toutes les périodes</option>
          <option value="Antiquité">Antiquité</option>
          <option value="Moyen-Âge">Moyen-Âge</option>
          <option value="Renaissance">Renaissance</option>
          <option value="Révolution">Révolution</option>
          <option value="Empire">Empire</option>
          <option value="Époque moderne">Époque moderne</option>
          <option value="Époque contemporaine">Époque contemporaine</option>
        </select>

        <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)}>
          <option value="">Tous niveaux</option>
          <option value="Facile">Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>

        {/* ✅ case à cocher */}
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={isChrono}
            onChange={(e) => setIsChrono(e.target.checked)}
          />
          Trier par ordre chronologique
        </label>
      </div>

      {/* Liste des flashcards */}
      <div className="flashcards-container">
        {displayedEvents.map(event => (
          <Flashcard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default FlashcardList;
