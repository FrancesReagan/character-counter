function StatsDisplay() {
  return (
    <div>
      <div>
        <div>Characters 0</div>
      </div>
      <div>
        <div>Words 0</div>
      </div>
      <div>
        <div>Reading Time {showReadingTime ? StatsDisplay.readingTime : "0:00"}/div>
      </div>
    </div>
  );
}
export default StatsDisplay;