import { useState } from "react";

function Toggler({}) {
  const [isOn, setisOn] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Toggle Me This...</h2>

      <button 
      onClick={() => setisOn(!isOn)}
      className={`px-4 py-2 rounded-md font-medium transition-colors${
        isOn
        ? "bg-green-500 hover:bg-green-600 text-white"
        : "bg-gray-300 hover:bg-gray-400 text-gray-800"
      }`}
      >
      Toggle Status
      </button>
    <p className="mt text-gray-700">
      <span className="font-medium">Status:</span>
      <span className={`ml-2 font-semibold ${isOn ? "text-green-600" : "text-red-600"}`}>  
        {isOn ? "On" : "Off"}
      </span>
    </p>
    {isOn && (
    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
      <p className="text-blue-800 font-medium"> Secret Message Revealed</p>
    </div>
      )}
    </div>
  );
}

export default Toggler;
