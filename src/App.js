/** @format */

import "./App.css";
import CountDownTimer from "./CountdownTimer";

function App() {
  const hoursMinSecs = { hours: 5, minutes: 20, seconds: 40 };
  return (
    <div className="App">
      <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
  );
}

export default App;
