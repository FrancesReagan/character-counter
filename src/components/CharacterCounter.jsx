// the state is managed in this component--the CharacterCounter--using the useState hook.  The text variable (which stores what the user types) is created and updated in 
// here--the CharacterCounter//
// this is the parent of statsdisplay and textinput//
// CharacterCounter is the main actor who does all the work--it keeps track of the user's text, calculates statistics, and tells the other components (TextInput and StatsDisplay)
// what to do. the state lives in CharacterCounter because its the central hub that needs to know the text to calculate stats and pass them to StatsDisplay, etc.//
import { useState } from "react";
import StatsDisplay from "./StatsDisplay";
import TextInput from "./TextInput";

function CharacterCounter({minWords = 25, maxWords = 100, targetReadingTime =1}){
  // useState is here---this below creates the text state in CharacterCounter component--this is where the user's typed text is stored//
  const [text, setText] = useState(""); 

// this function updates the text state using setText whenever the user types something in TextInput.//
// the text state is used to calculate stats(word count, character count, reading time( and pass them to StatsDisplay.))
const handleTextChange= (newText) => {
  setText(newText);
  console.log("Your New State is", text);
};
  
  const calculateStats = (inputText) => {
    // handle empty input//
    if(!inputText.trim()) {
      return { wordCount: 0, characterCount: 0, readingTime: 0 };
    }

    // Calculate word count//
    const wordsArray = inputText.trim().split(/\s+).filter((word) => word.length > 0);
    const wordCount = wordsArray.length;

    // calculate character count (excluding spaces)
    const characterCount = inputText.replace(/\s/g, "").length;

    // calculate reading time (assuming 200 words per minute)//
    // 2 decimal places//
    const readingTime = (wordCount / 200).toFixed(2); 

    return { wordCount, characterCount, readingTime };
  };

  // Progress indicator: check if word count is within min/max//
  const isWithinGoal = stats.wordCount >= minWords && stats.wordCount <= maxWords;
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
    <h1>CharacterCounter</h1>
    <TextInput 
    placeholder="Start typing your thoughts here" 
    onTextChange={handleTextChange}
    />
    <StatsDisplay stats={stats} />
    <p style={{ color: isWithinGoal ? "green" : "red" }}>
      Word count goal: {minWords} to {maxWords} words
      {isWithinGoal ? " (Goal met)" : " (Goal not met)"}
    </p>   
    </div>
   );
  }
  export default CharacterCounter;

