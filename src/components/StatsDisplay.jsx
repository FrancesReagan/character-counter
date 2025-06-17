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