import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Dates from "./pages/Dates";
import Quiz from "./pages/Quiz";
import Footer from './components/footer.jsx';
import "./components/style.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
