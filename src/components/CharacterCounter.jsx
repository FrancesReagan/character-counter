// the state is managed in this component--the CharacterCounter--using the useState hook.  The text variable (which stores what the user types) is created and updated in 
// here--the CharacterCounter//
// this is the parent of statsdisplay and textinput//
// CharacterCounter is the main actor who does all the work--it keeps track of the user's text, calculates statistics, and tells the other components (TextInput and StatsDisplay)
// what to do. the state lives in CharacterCounter because its the central hub that needs to know the text to calculate stats and pass them to StatsDisplay, etc.//

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
}
  
  const stats = calculateStats(text);
  console.log(stats);
  // calculateStats(inputText).forEach((word))

  return (
    <div>
    <h1>CharacterCounter</h1>
    <TextInput placeholder="Start typing your thoughts here" onTextChange={handleTextChange}/>
    <StatsDisplay stats={stats} />
    </div>

   );
  }
  export default CharacterCounter;

