import React, { useState, useEffect } from "react";

function getRandomEvents(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function Quiz() {
  const [allEvents, setAllEvents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState("cash");
  const [showOptions, setShowOptions] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch('/data/Events.json')
      .then(res => res.json())
      .then(data => {
        setAllEvents(data);
        setQuestions(getRandomEvents(data, 10));
      })
      .catch(err => console.error("Erreur fetch Quiz :", err));
  }, []);

  const current = questions[currentIndex];

  const restartQuiz = () => {
    const newQuestions = getRandomEvents(allEvents, 10);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setMode("cash");
    setShowOptions(false);
    setAnswered(false);
    setUserInput("");
  };

  if (currentIndex >= 10) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Score final : {score}/20</h2>
        <p>
          {
            score == 20 ? "Le GOAT !" :
            score >= 15 ? "Champion !" :
            score >= 10 ? "Tu te débrouilles bien !" :
            score >= 5 ? "Va falloir faire mieux !" :
            "Gros nul !"}
        </p>
        <button onClick={restartQuiz} style={{ marginTop: "20px" }}>
          Rejouer 🔄
        </button>
      </div>
    );
  }

  if (!current) return <p style={{ textAlign: "center" }}>Chargement...</p>;

  const handleAnswer = (userAnswer) => {
    if (answered) return;
    const isCorrect = userAnswer.trim() === current.date;
    setAnswered(true);

    if (mode === "cash" && isCorrect) {
      setScore(prev => prev + 2);
    } else if (mode === "carre" && isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setUserInput("");
    setAnswered(false);
    setShowOptions(false);
    setMode("cash");
    setCurrentIndex(prev => prev + 1);
  };

  const options = getRandomEvents(allEvents.filter(e => e.date !== current.date), 3)
    .map(e => e.date)
    .concat(current.date)
    .sort(() => 0.5 - Math.random());

  return (
    <div className="quiz-container" style={{
      maxWidth: "600px",
      margin: "auto",
      marginTop: "40px",
      background: "#fff8e1",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}>
      <h2>Question {currentIndex + 1}/10</h2>
      <p><strong>{current.title}</strong></p>

      {mode === "cash" && !showOptions && (
        <>
          <input
            type="text"
            placeholder="Entrez la date"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              width: "70%",
              marginTop: "10px"
            }}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => handleAnswer(userInput)}>Valider</button>
            <button onClick={() => {
              setMode("carre");
              setShowOptions(true);
            }} style={{ marginLeft: "10px" }}>
              Demander le carré
            </button>
          </div>
        </>
      )}

      {showOptions && (
        <div style={{ marginTop: "15px" }}>
          {options.map((date, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(date)}
              style={{ margin: "5px" }}
            >
              {date}
            </button>
          ))}
        </div>
      )}

      {answered && (
        <button onClick={nextQuestion} style={{ marginTop: "20px" }}>
          Question suivante
        </button>
      )}
    </div>
  );
}

export default Quiz;
