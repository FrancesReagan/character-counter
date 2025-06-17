
function TextInput({onTextChange, placeholder}) {
const handleChange = (e) => {
  console.log(e.targe.value);
  onTextChange(e.target.value)
};

  return(
    <>
    <h1>TextInput</h1>
    <textarea onChange={handleChange} placeholder={placeholder}style={{width: "100%"}}/>
</>
  );
}
export default TextInput

// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea