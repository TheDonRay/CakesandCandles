import React from "react";
import "../Styles/mainpage.css";
import { useState, useEffect } from "react";

// main function to hold the birthday stuff and username etc.
export default function MainPage() {
  // original state
  const BirthdayWish =
    "Here's to many more incredible years ahead. I'm unbelievably proud of how far you've come! 🙌";
  
  // instantiation for the usestate
  const [origState, newState] = useState(BirthdayWish);
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloons, setBalloons] = useState([]);

  // instantiate Birthday person variable
  const BirthdayPerson = "Karma";

  // Generate random balloons on mount
  useEffect(() => {
    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      emoji: ['🎈', '🎉', '🎊', '🎁', '🎂'][Math.floor(Math.random() * 5)]
    }));
    setBalloons(newBalloons);
  }, []);

  // create a button function for the envelope stuff
  function ClickMe() {
    newState(`Happy Birthday ${BirthdayPerson}`);
    setShowConfetti(true);
    
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  }

  function CloseButton() {
    newState(BirthdayWish);
    setShowConfetti(false);
  }

  return (
    <>
      {/* Floating balloons background */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              animationDelay: `${balloon.delay}s`,
              animationDuration: `${balloon.duration}s`,
            }}
          >
            {balloon.emoji}
          </div>
        ))}
      </div>

      {/* Confetti explosion */}
      {showConfetti && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: ['#ff6b81', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff8fab'][i % 5],
              }}
            />
          ))}
        </div>
      )}

      {/* Stars/sparkles background */}
      <div className="stars">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="main-div">
        <h1 className="titleDiv">
          {origState.includes(BirthdayPerson) ? (
            <>
              {origState.split('').map((char, i) => (
                <span
                  key={i}
                  className="bounce-letter"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </>
          ) : (
            "Happy Birthday 🎊"
          )}
        </h1>
        
        <h2 className="secondtitle">
          {!origState.includes(BirthdayPerson) ? origState : "🎉 Click the button! 🎉"}
        </h2>
        
        <div className="button-container">
          <button className="bdaybtn" onClick={ClickMe}>
            <span className="button-content">
              🎁 Click for a surprise! 🎁
            </span>
          </button>
          <button className="closebtn" onClick={CloseButton}>
            <span className="button-content">
              ← Close
            </span>
          </button>
        </div>
      </div>
    </>
  );
}