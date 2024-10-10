import React, { useState } from 'react';
import './App.css';

// Import images from the assets folder
import rose from './assets/rose.jpg';
import sunflower from './assets/sunflower.jpg';
import orchid from './assets/orchid.jpg';
import tulip from './assets/tulip.jpg';
import daisy from './assets/daisy.jpg';
import lavender from './assets/lavender.jpg';
import peony from './assets/peony.jpg';
import cherryblossom from './assets/cherryblossom.jpg';
import lily from './assets/lily.png';
import hibiscus from './assets/hibiscus.jpg';

const App = () => {
  const initialFlashcards = [
    { question: rose, answer: "Rose: Symbol of love and romance.", category: "Easy" },
    { question: sunflower, answer: "Sunflower: Symbol of loyalty and longevity.", category: "Medium" },
    { question: orchid, answer: "Orchid: Represents beauty, strength, and love.", category: "Hard" },
    { question: tulip, answer: "Tulip: Symbolizes perfect love and rebirth.", category: "Easy" },
    { question: daisy, answer: "Daisy: Represents purity, innocence, and true love.", category: "Easy" },
    { question: lavender, answer: "Lavender: Symbol of calmness and relaxation.", category: "Medium" },
    { question: peony, answer: "Peony: Represents prosperity, good fortune, and honor.", category: "Medium" },
    { question: cherryblossom, answer: "Cherry Blossom: Symbol of beauty, life, and impermanence.", category: "Hard" },
    { question: lily, answer: "Lily: Represents purity, passion, and remembrance.", category: "Easy" },
    { question: hibiscus, answer: "Hibiscus: Symbolizes delicate beauty and femininity.", category: "Hard" }
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctStreak, setCorrectStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const flipCard = () => setIsFlipped(!isFlipped);

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleSubmit = () => {
    const correctAnswer = flashcards[currentCard].answer.toLowerCase();
    const userAnswer = userInput.trim().toLowerCase();

    // Enhanced answer check to allow for minor differences (e.g., ignoring punctuation)
    if (correctAnswer.includes(userAnswer)) {
      setFeedback('Correct!');
      const newStreak = correctStreak + 1;
      setCorrectStreak(newStreak);
      setLongestStreak(Math.max(newStreak, longestStreak));
    } else {
      setFeedback('Incorrect! Try again.');
      setCorrectStreak(0);
    }
    setUserInput('');
    setIsFlipped(true);
  };

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setIsFlipped(false);
    setFeedback('');
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? flashcards.length - 1 : prevCard - 1));
    setIsFlipped(false);
    setFeedback('');
  };

  const shuffleCards = () => {
    const shuffledCards = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffledCards);
    setCurrentCard(0);
    setIsFlipped(false);
    setFeedback('');
  };

  const markAsMastered = () => {
    const masteredCard = flashcards[currentCard];
    setMasteredCards([...masteredCards, masteredCard]);
    const updatedFlashcards = flashcards.filter((_, index) => index !== currentCard);
    setFlashcards(updatedFlashcards);
    if (updatedFlashcards.length > 0) {
      setCurrentCard(currentCard % updatedFlashcards.length);
    } else {
      setCurrentCard(0);
    }
    setIsFlipped(false);
    setFeedback('');
  };

  const removeMasteredCard = (index) => {
    const updatedMasteredCards = masteredCards.filter((_, i) => i !== index);
    setMasteredCards(updatedMasteredCards);
  };

  return (
    <div className="App">
      <h1>Flower Flashcards!</h1>
      <p>A fun way to learn about flowers and their meanings.</p>
      <p>Total Cards: {flashcards.length}</p>
      <p>Current Streak: {correctStreak} | Longest Streak: {longestStreak}</p>

      <div className="flashcard-container">
        <div className={`card ${flashcards[currentCard].category.toLowerCase()}`} onClick={flipCard}>
          {isFlipped ? (
            <p>{flashcards[currentCard].answer}</p>
          ) : (
            <img src={flashcards[currentCard].question} alt="Flower" className="flower-image" />
          )}
        </div>
      </div>

      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{feedback}</p>

      <div className="button-container">
        <button className="nav-button" onClick={prevCard}>&lt; Prev</button>
        <button className="nav-button" onClick={shuffleCards}>Shuffle</button>
        <button className="nav-button" onClick={nextCard}>Next &gt;</button>
        <button className="nav-button" onClick={markAsMastered}>Mark as Mastered</button>
      </div>

      <h2>Mastered Cards:</h2>
      <ul>
        {masteredCards.map((card, index) => (
          <li key={index}>
            {card.answer}
            <button className="delete-button" onClick={() => removeMasteredCard(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
