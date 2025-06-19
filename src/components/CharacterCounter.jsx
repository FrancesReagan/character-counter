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
  // added state for toggling//
  const [showStats, setShowStats] = useState(true); 

// this function updates the text state using setText whenever the user types something in TextInput.//
// the text state is used to calculate stats(word count, character count, reading time( and pass them to StatsDisplay.))
const handleTextChange= (newText) => {
  setText(newText);
};
  
  const calculateStats = (inputText) => {
    // handle empty input//
    if(!inputText.trim()) {
      return { wordCount: 0, characterCount: 0, readingTime: 0 };
    }

    // Calculate word count//
    const wordsArray = inputText.trim().split(/\s+/).filter((word) => word.length > 0);
    const wordCount = wordsArray.length;

    // calculate character count (excluding spaces)
    const characterCount = inputText.replace(/\s/g, "").length;

    // calculate reading time (assuming 200 words per minute)//
    // 2 decimal places//
    const readingTime = (wordCount / 200).toFixed(2); 

    return { wordCount, characterCount, readingTime };
  };

  // Progress indicator: check if word count is within min/max//
const stats = calculateStats(text);
const isWithinGoal = stats.wordCount >= minWords && stats.wordCount <= maxWords;

return (
  <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
     <h1 className="text-2xl font-bold text-gray-900 mb-5 text-center">
      CharacterCounter
      </h1>
      <button
      onClick={() => setShowStats(!showStats)}
      className={`px-6 py-2 rounded-lg font-medium text-white mb-6 transition-colors ${
        showStats
        ? "bg-red-500 hover:bg-red-600"
        : "bg-blue-500 hover:bg-blue-600"
      }`}
      >
      {showStats ? "Hide Stats" : "Show Stats"}   
      </button>
     <TextInput 
     placeholder="Start typing your thoughts here" 
     onTextChange={handleTextChange}
     />
    {showStats && stats.wordCount === 0 && stats.characterCount === 0 ? (
      <p className="text-gray-500 text-center my-6 italic">
        Type something to see stats
        </p>
      ) : (
      showStats && <StatsDisplay stats={stats} />
  )}
     <div className={`p-4 rounded-lg border-2 text-center font-semibold ${
      isWithinGoal
       ? "bg-green-50 border-green-300 text-green-700"
       : "bg-red-50 border-red-300 text-red-700"
     }`}
    >
      <p>
      Word count goal: {minWords} to {maxWords} words
    </p>   
  <p className="mt-1">
      {isWithinGoal ? "✅Goal met" : " ❌Goal not met"}
      </p>
      <p className="text-sm mt-2 opacity-75">
        Current: {stats.wordCount} words
      </p>
  </div>
  </div>
   );
  }
  export default CharacterCounter;

