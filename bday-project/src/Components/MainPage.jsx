import React from "react";
import "../Styles/mainpage.css";
import { useState } from "react";

// main function to hold the birthday stuff and username etc.
export default function MainPage() {
  // original state
  const BirthdayWish =
    "Wishing you many more and I am so freaking Proud of you‼️"; 
  // instantiation for the usestate
  const [origState, newState] = useState(BirthdayWish);

  // instantiate Birthday person variable
  const BirthdayPerson = "Aneesah";
  // const closeState =
  // create a button function for the envelope stuff
  // this button function is going have the Click me ! for the birthday suprise.
  function ClickMe() {
    newState(`Happy Birthday ${BirthdayPerson}‼️`);
  }

  function CloseButton() {
    newState(BirthdayWish);
  }

  return (
    <>
      <div className="main-div">
        <h1 className="titleDiv">Main Page for Birthday content to go in</h1>
        <h2 className="secondtitle">{origState}</h2>
      </div>
      <div className="button-container">
        <button className="bdaybtn" onClick={ClickMe}>
          Click me!
        </button>
        <button className="closebtn" onClick={CloseButton}>
          Close
        </button>
      </div>
    </>
  );
}
