// text input is a box where users type their article//
// this is another child of CharacterCounter//
function TextInput({ onTextChange, placeholder }) {
const handleChange = (e) => {
  onTextChange(e.target.value);
};

return(
 <div className="mb-4">
  <textarea 
    onChange={handleChange} 
    placeholder={placeholder}
    className="w-full p-3 border border-gray-300 rounded-lg min-h-[120px] resize-y focus:outline-none 
    focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
      />
  </div>
  );
}
export default TextInput

// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea