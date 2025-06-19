// text input is a box where users type their article//
// this is another child of CharacterCounter//
function TextInput({onTextChange, placeholder}) {
const handleChange = (e) => {
  console.log(e.target.value);
  onTextChange(e.target.value);
};

  return(
    <div>
    <h1>TextInput</h1>
    <textarea 
    onChange={handleChange} 
    placeholder={placeholder}
    style={{
    width: "100%"
    padding:"10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
    }}
    />
</div>
  );
}
export default TextInput

// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea