<img width="282" alt="image" src="https://github.com/user-attachments/assets/eee6a452-968c-4cc5-ac73-a3ce20d55477" />
<img width="232" alt="image" src="https://github.com/user-attachments/assets/4c6120cd-f370-4324-8084-9db1d4a1360c" />

***To see character counter works in action click link below or find the "how character counter works.mp4 file in the character-counter repo"***
[Character Counter in Action](https://github.com/FrancesReagan/character-counter/blob/main/how%20character%20counter%20works.mp4)

(note Reflection answers at bottom)

__CHARACTER COUNTER APP__
_This is a text analysis tool that can give you real-time statistics for the content you write; this includes word count, 
character count, and estimated reading time. I feel this app is great for writers, bloggers, and or content creators
who want or need to meet specific word count goals._

__FEATURES__
  - Real-time text analysis: gives you instant feedback as you type.
  - Word count tracking: monitors your progress toward your writing goals.
  - Character count: tracks how many characters you type but excludes spaces.
  - Reading time estimation: calculates estimated reading time based on 200 words per minute.
  - Goal progress indicator: can see how close you are to meeting your written goals.
  - Toggle stats shown or hidden: can show or hide stats panel.
  - Responsive design for mobile interfaces: looks good on your phone or your mom's phone:).


__SETUP:__
****__TO INSTALL:__****

*Clone or download the project files

*create New Vite App with React and Tailwind
  - `npm create vite@latest`
  - pick React/React-SWC
  - cd character-counter
  - `npm install` or `npm i`
  - `npm install tailwindcss @tailwind/vite` --this installs tailwind CSS
  
*Configure the Vite plugin: vite.config.ts file 
 - add to the top of the vite.config.ts file:
   - `import tailwindcss from 'tailwindcss/vite'`;
 - update the plugins section:
   - `plugins: [react(), tailwindcss()]`
    
*Add an @import to the top of your CSS file (src/index.css) that imports tailwind ccs:
 - `@import "tailwindcss"`;
    
*add to the App.css file (src/App.css):
 - `@layer base {  h1 { font-size: var(--text-2xl);  }  h2 { font-size: var(--text-xl);  }  h3 { font-size: var(--text-lg);}  a { color: var(--color-blue-600); text-decoration-line: underline;  }}`

RUN: 
- `npm run dev`

MONITOR:
- ctrl and click on the local host link:
  - VITE v6.3.5  ready in 669 ms

  - ➜  Local:   http://localhost:5173/
  - ➜  Network: use --host to expose
  - ➜  press h + enter to show help

- Right click on browser screen
  - Click Inspect
  - Click Console to see any details, errors, etc. help in your development process as you implement and or change the 
  code to suit your needs.

__File Structure__

<img width="402" alt="image" src="https://github.com/user-attachments/assets/8c96e996-fac7-46f5-acfb-51c9f8391d18" />

__OVERVIEW OF COMPONENTS__

__CharacterCounter(main component)__
  - This is the primary component that manages the state and orchestrates text analysis.
    - __PROPS__
        - `minWords` (number, default: 25) - min word count goal
        - `maxWords` (number, default: 100) - max word count goal
        - `targetReadingTime` (number, default:1) - target reading time in mins (not yet used)
    
__TextInput(child component)__
  - This is a textarea component where users input their text.
    -__PROPS__
       - `onTextChange`(function) - callback function triggered when text changes
       - `placeholder`(string) - placeholder text for textarea

__StatsDisplay(child component)__
  - Displays the calculated stats in a panel
    -__PROPS__
       -`stats` (object) - object that contains wordCount, characterCount, and readingTime
    
__Toggler(stand alone component)__
  - A toggle component that shows state management (its an example to show)
    
__HOW TO USE__
*Type your text in the textarea
*View real-time stats below input area
*Goal indicator shows if you hit your target word count 
*Use the "HideStats/ShowStats" button to toggle the statistics panel

__HOW TO CUSTOMIZE:__
  __Goals__
    -you can customize to fit your word count goals--this is done changing and passing any new minWords and maxWords prop   
    values you desire to the CharacterCounter component:
    
      //for a short blog post//
      <CharacterCounter minWords={300} maxWords={500} />

      //for a social media post//
      <CharacterCounter minWords={10} maxWords={50} />

      //for an essay//
      <CharacterCounter minWords={800} maxWords={1200} />
      
  __STYLING__
    - can modify existing Tailwind classes 
    - can add custom CSS in `App.css` or `index.css`
    - can create different props for different themes

 __READING SPEED__
   -currently set to 200 words per minute-
    - to modify: 
      -open `CharacterCounter.jsx`
      -find the reading time calculation: const readingTime = (wordCount / 200).toFixed(2);
      -replace 200 with your desired words per min.


__Reflection:__


**How did you handle state updates when the text changed?**


I used the useState hook:

const [text, setText] = useState("");
const handleTextChange = (newText);
};

I passed the "handleTextChange" function down to the "TextInput" component as a prop ("onTextChange"), which calls it 
whenever the textarea value changes. The state lives in the parent component ("CharacterCounter") where it is needed for 
calculations, as the child component ("TextInput") triggers updates through a callback.


**What considerations did you make when calculating reading time?**

const readingTime = (wordCount / 200).toFixed(2);

I decided that a standard reading speed would be about 200 words per minute. I used toFixed(2) to round to two decimal places; I returned "0" in case
the input was left empty. I was working on allowing reading speed to be configured via props as I have currently the "targetReadingTime" prop that will be 
used at a later date--if I have more time.


**How did you ensure the UI remained responsive during rapid text input?**

My current code or implemented code calculates the stats on every render--which is good for a smalll to medium amount of text input. 
I read that if I want to later implement "useMemo" to handle very large texts and or very rapid typing---this would memorize what the stats calculation is
and using the "debouncing" for the text input.


**What challenges did you face when implementing the statistics calculations?**

These are the following changes I faced: empty input handling, word count logic, how to count characters, and dealing with edge cases.
For empty input handling I used "!inputText.trim()" and if zeros where returned. For word counting logic I found this code "split(/\s+/).filter(word) => word.length > 0"
to handle many spaces.  I excluded spaces with 'replace(/\s/g, ""'; the filtering used ensured that empty strings don't count as words.


Currently, my code has clean component separation with clear responsibilities, use of React hooks and state management implemented well, proper prop passing between the 
components, conditional rendering for the stats display, and okay CSS classes for styling. In the near future, I would like to make the following improvements, namely: 
*better CSS styling, use of "useMemo" for larger texts and or very rapid typing, add validation for edge cases (error handling), and use  the "targetReadingTime" prop
in a better way to make target reading time configurable--as right now this prop is passed but I have yet to have it used in the code.
