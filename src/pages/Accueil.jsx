import React, { useState, useEffect } from "react";

function Accueil() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [periodFilter, setPeriodFilter] = useState("");
  const [importantEvents, setImportantEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const parseDate = (str) => parseInt(str) || 0;

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);

    fetch('/data/Events.json')
      .then(res => res.json())
      .then(data => setAllEvents(data))
  }, []);

  useEffect(() => {
    const filtered = allEvents
      .filter(event => ["Facile", "Moyen"].includes(event.difficulty))
      .filter(event => (periodFilter ? event.period === periodFilter : true))
      .filter(event => (showFavoritesOnly ? favorites.includes(event.id) : true))
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));

    setImportantEvents(filtered);
  }, [periodFilter, allEvents, favorites, showFavoritesOnly]);

  const toggleFavorite = (eventId) => {
    let updated;
    if (favorites.includes(eventId)) {
      updated = favorites.filter(id => id !== eventId);
    } else {
      updated = [...favorites, eventId];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const pickRandomEvent = () => {
    if (importantEvents.length === 0) return;
    const rand = importantEvents[Math.floor(Math.random() * importantEvents.length)];
    setSelectedEvent(rand);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        Histoire de dates : le site pour apprendre l'Histoire de France
      </h1>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
        Histoire de dates c'est LE site pour apprendre les dates de l'Histoire de France tout en s'amusant. C'est comme Assassin's Creed, sauf que vous apprenez vraiment des choses. Nous n'avons qu'une promesse : vous permettre d'impressionner votre crush en date avec les dates de l'Histoire.
      </p>
      <br />

      {/* Filtres */}
      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <label>
          Période :
          <select onChange={(e) => setPeriodFilter(e.target.value)} style={{ marginLeft: "8px" }}>
            <option value="">Toutes</option>
            <option value="Antiquité">Antiquité</option>
            <option value="Moyen-Âge">Moyen-Âge</option>
            <option value="Renaissance">Renaissance</option>
            <option value="Révolution">Révolution</option>
            <option value="Empire">Empire</option>
            <option value="Époque moderne">Époque moderne</option>
            <option value="Époque contemporaine">Époque contemporaine</option>
          </select>
        </label>

        <button onClick={pickRandomEvent} style={{ marginLeft: "1rem" }}>
          Événement au hasard
        </button>

        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          style={{ marginLeft: "1rem" }}
        >
          {showFavoritesOnly ? "Voir tous les événements" : "Voir les favoris"}
        </button>
      </div>

      {/* Frise chronologique */}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflowX: "auto",
        padding: "2rem 1rem",
        margin: "1rem auto",
        maxWidth: "100%",
        borderTop: "3px solid #b59144",
        gap: "40px"
      }}>
        {importantEvents.map(event => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            style={{
              flex: "0 0 auto",
              textAlign: "center",
              cursor: "pointer",
              position: "relative"
            }}
          >
            <div style={{
              width: "18px",
              height: "18px",
              backgroundColor: favorites.includes(event.id) ? "#c92a2a" : "#5c2a29",
              border: "2px solid #fff",
              borderRadius: "50%",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              margin: "0 auto"
            }} />
            <p style={{
              fontSize: "12px",
              marginTop: "6px",
              whiteSpace: "nowrap"
            }}>{event.date}</p>
          </div>
        ))}
      </div>

      {/* carte de la date choisie */}
      {selectedEvent && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="date-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <h3>{selectedEvent.title}</h3>
            <p><strong>{selectedEvent.date}</strong> – {selectedEvent.period}</p>
            <p>{selectedEvent.description}</p>

            <button onClick={() => toggleFavorite(selectedEvent.id)}>
              {favorites.includes(selectedEvent.id) ? "Retirer des favoris ❤️" : "Ajouter aux favoris 🤍"}
            </button>
            <br />
            <button onClick={() => setSelectedEvent(null)} style={{ marginTop: "10px" }}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accueil;
