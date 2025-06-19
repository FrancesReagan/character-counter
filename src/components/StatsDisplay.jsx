//StatsDisplay is a scoreboard that shows stats of word counting//
// this is one child of Character Counter//

function StatsDisplay({ stats }) {

  return (
    <div className="my-5 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold text-gray-800  mb-3">Statistics</h2>
    <div className="space-y-2">   
    <p className="text-gray-700">
      <span className="font-medium">Word Count: </span>
      <span className="ml-2 text-blue-600 font-semibold">{stats.wordCount}</span>
      </p>
    <p className="text-gray-700">
      <span className="font-medium">Character Count: </span>
      <span className="ml-2 text-blue-600 font-semibold">{stats.characterCount}</span>
      </p> 
      <p className="text-gray-700">
        <span className="font-medium">Reading Time:</span>
        <span className="ml-2 text-blue-600 font-semibold">{stats.readingTime} minutes</span>
      </p>        
      </div>
      </div>
    );
}

export default StatsDisplay