import React from "react";
import "../Styles/mainpage.css";   
import { useState } from 'react'; 


// main function to hold the birthday stuff and username etc.
export default function MainPage() { 

    // instantiation for the usestate 
    const [origState, newState] = useState('Its Your Birthday'); 
    
    // instantiate Birthday person variable 
    const BirthdayPerson = 'Aneesah'; 

    // create a button function for the envelope stuff 
    // this button function is going have the Click me ! for the birthday suprise.
    function ClickMe() { 
        newState(
            `Happy Birthday ${BirthdayPerson}‼️`
        ); 
    } 

  return (
    <>
      <div className = 'main-div'>
        <h1 className = 'titleDiv'>Main Page for Birthday content to go in</h1>  
        <h2 className = 'secondtitle'>{origState}</h2>
        <button className = 'bdaybtn' onClick={ClickMe}>Click me!</button>
      </div>
    </>
  );
}
