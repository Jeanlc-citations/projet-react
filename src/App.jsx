/* App.jsx */
import "./App.css";

export default function App() {
  return (
    <div id="dog-card">
      <img
        id="dog-picture"
        src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg"
        alt="Dog"
      />
      <div id="dog-description">
        <h3>Rex</h3>
        <p className="dog-description-line">Age: 3 years</p>
        <p className="dog-description-line">Breed: Golden Retriever</p>
      </div>
    </div>
  );
};