import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Histoire de France</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/dates">Toutes les dates</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
