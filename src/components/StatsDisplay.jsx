//StatsDisplay is a scoreboard that shows stats of word counting//
// this is one child of Character Counter//

function StatsDisplay({ stats }){
  console.log(stats.wordCount);

  return (
    <div style={{ margin: "20 px 0", padding: "10px", backgroundColor: "#f9f9f9" }}>
    <h1>Statistics</h1>
    <p>Word Count: {stats.wordCount}</p>
    <p>Character Count: {stats.characterCount}</p>
    <p>Reading Time: {stats.readingTime} minutes</p>
    </div>
  );
}

export default StatsDisplay