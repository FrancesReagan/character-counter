//StatsDisplay is a scoreboard that shows stats of word counting//
// this is one child or Character Counter//

function StatsDisplay({stats}){
  console.log(stats.wordCount);

  return (
    <>
    <h1>Stats Display</h1>
    <h2>Word Count: {stats.wordCount}</h2>
    <h2>Character Count: {stats.characterCount}</h2>

    </>
  )
}

export default StatsDisplay