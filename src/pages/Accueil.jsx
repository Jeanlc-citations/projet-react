import React, { useState, useEffect } from "react";

function Accueil() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [periodFilter, setPeriodFilter] = useState("");
  const [importantEvents, setImportantEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Chargement des données au montage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavs);

    fetch('/data/Events.json')
      .then(res => res.json())
      .then(data => {
        setAllEvents(data);
      })
      .catch(err => console.error("❌ Erreur fetch Accueil :", err));
  }, []);

  // Mise à jour des événements filtrés
  useEffect(() => {
    const filtered = allEvents
      .filter(event => ["Facile", "Moyen"].includes(event.difficulty))
      .filter(event => (periodFilter ? event.period === periodFilter : true))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    setImportantEvents(filtered);
  }, [periodFilter, allEvents]);

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
      <h2>Frise Chronologique</h2>

      {/* FILTRE DE PÉRIODE */}
      <label>
        Période :
        <select onChange={(e) => setPeriodFilter(e.target.value)}>
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
        Événement au hasard 🎲
      </button>

      {/* FRISE */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        padding: "1rem 0",
        borderBottom: "1px solid #ccc",
        gap: "20px",
        marginTop: "1rem"
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
              width: "14px",
              height: "14px",
              backgroundColor: favorites.includes(event.id) ? "#c92a2a" : "#333",
              borderRadius: "50%",
              margin: "0 auto"
            }} />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>{event.date}</p>
          </div>
        ))}
      </div>

      {/* MODAL FLASHCARD */}
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
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "500px",
            textAlign: "center"
          }}
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
