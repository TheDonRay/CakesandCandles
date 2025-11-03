import React from "react";
import "../Styles/mainpage.css";
import { useState } from "react";

// main function to hold the birthday stuff and username etc.
export default function MainPage() {
  // original state
  const BirthdayWish =
    "Here’s to many more incredible years ahead. I’m unbelievably proud of how far you’ve come! 🙌"; 
  // instantiation for the usestate
  const [origState, newState] = useState(BirthdayWish);

  // instantiate Birthday person variable
  const BirthdayPerson = "Aneesah";
  
  // create a button function for the envelope stuff
  // this button function is going have the Click me ! for the birthday suprise.
  function ClickMe() {
    newState(`Happy Birthday ${BirthdayPerson}🧸`);
  }

  function CloseButton() {
    newState(BirthdayWish);
  }

  return (
    <>
      <div className="main-div">
        <h1 className="titleDiv">Happy Birthday 💗</h1>
        <h2 className="secondtitle">{origState}</h2>
        <div className="button-container">
          <button className="bdaybtn" onClick={ClickMe}>
            Click for a suprise!
          </button>
          <button className="closebtn" onClick={CloseButton}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}