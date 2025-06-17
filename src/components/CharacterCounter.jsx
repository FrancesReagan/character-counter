import StatsDisplay from "./StatsDisplay";
import TextInput from "./TextInput";

function CharacterCounter(){
  const [text, setText] = useState("");

//what to do when the user types into TextInput//
const handleTextChange= (newText) => {
  setText(newText);
  console.log("Your New State is", text);
}

const calculateStats = (inputText) => {
  // const wordCount = inputText
  const wordsArray = inputText.trim().split(/\s+/).filter((word) => word.length > 0);
  console.log(wordsArray);

  const wordCount = wordsArray.length;
  console.log(wordCount);

  //character count//
return {wordsArray, wordCount};
}
  const stats = calculateStats(text);
  console.log(stats);
  // calculateStats(inputText).forEach((word))

  return (
    <>
    <h1>CharacterCounter</h1>
    <StatsDisplay calculateStats = {calculateStats}/>
    <TextInput placeholder="Start typing your thoughts here" onTextChange={handleTextChange}/>
    </>

   );
  }
  export default CharacterCounter;

