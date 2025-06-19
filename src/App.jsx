// the App component is a container that renders the CharacterCounter. It does not hold any state itself---it simply passes props to CharacterCounter---which does the 
// heavy lifting.//
// App component is the manager and places CharacterCounter on main stage. The App component doesn't use useState this time nor does it store any data. It just renders
// CharacterCounter and passes some configuration props (minWords, maxWords, targetReadingTime). App is like a simplewrapper that sets up the app but doesn't manage any
// dynamic data//
import './App.css'
import CharacterCounter from './components/CharacterCounter';

function App() {
  return (
    <div>
  <CharacterCounter />
  
      
    </div>
  );
}

export default App;