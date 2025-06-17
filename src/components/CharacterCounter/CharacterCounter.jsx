import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

function CharacterCounter() {
   const [text, setText] = useState("");

   const [stats, setStats] = useState({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
   });




  //  Handle the text change from the input
  const handleTexChange = (newText) => {
    setText(newText);
    setStats(prevStats => {
      return {
      ...prevStats,
      characterCount: newText.length
  };
  });

  };

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput onTextChange={handleTexChange}/>
      <StatsDisplay stats={stats}/>
    </div>
  );
}

export default CharacterCounter;