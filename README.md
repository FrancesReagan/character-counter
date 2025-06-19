<img width="282" alt="image" src="https://github.com/user-attachments/assets/eee6a452-968c-4cc5-ac73-a3ce20d55477" />
<img width="232" alt="image" src="https://github.com/user-attachments/assets/4c6120cd-f370-4324-8084-9db1d4a1360c" />
***See mp4 in character-counter repo to see how it works in action****
https://github.com/FrancesReagan/character-counter/blob/main/how%20character%20counter%20works.mp4




Reflection:
*How did you handle state updates when the text changed?
I used the useState hook:
const [text, setText] = useState("");
const handleTextChange = (newText);
};
I passed the "handleTextChange" function down to the "TextInput" component as a prop ("onTextChange"), which calls it 
whenever the textarea value changes. The state lives in the parent component ("CharacterCounter") where it is needed for 
calculations, as the child component ("TextInput") triggers updates through a callback.

*What considerations did you make when calculating reading time?
const readingTime = (wordCount / 200).toFixed(2);

I decided that a standard reading speed would be about 200 words per minute. I used toFixed(2) to round to two decimal places; I returned "0" in case
the input was left empty. I was working on allowing reading speed to be configured via props as I have currently the "targetReadingTime" prop that will be 
used at a later date--if I have more time.

*How did you ensure the UI remained responsive during rapid text input?
My current code or implemented code calculates the stats on every render--which is good for a smalll to medium amount of text input. 
I read that if I want to later implement "useMemo" to handle very large texts and or very rapid typing---this would memorize what the stats calculation is
and using the "debouncing" for the text input.

*What challenges did you face when implementing the statistics calculations?
These are the following changes I faced: empty input handling, word count logic, how to count characters, and dealing with edge cases.
For empty input handling I used "!inputText.trim()" and if zeros where returned. For word counting logic I found this code "split(/\s+/).filter(word) => word.length > 0"
to handle many spaces.  I excluded spaces with 'replace(/\s/g, ""'; the filtering used ensured that empty strings don't count as words.

Currently, my code has clean component separation with clear responsibilities, use of React hooks and state management implemented well, proper prop passing between the 
components, conditional rendering for the stats display, and okay CSS classes for styling. In the near future, I would like to make the following improvements, namely: 
*better CSS styling, use of "useMemo" for larger texts and or very rapid typing, add validation for edge cases (error handling), and use  the "targetReadingTime" prop
in a better way to make target reading time configurable--as right now this prop is passed but I have yet to have it used in the code.
