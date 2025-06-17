import { useState } from "react";

function Toggler({}) {
  const [isOn, setisOn] = useState(false);

  return (
    <div>
      <h2>Toggle Me This...</h2>

      <button onClick={() => setisOn(!isOn)}>Toggle Status</button>
      <p> Status: {isOn ? "On" : "Off"}</p>
      {isOn && <div>Secret Message </div>}
    </div>
  );
}

export default Toggler;
