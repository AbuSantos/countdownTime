import React,{useState,useEffect} from 'react'

const CountDownTimer = () => {
  // ...

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`8/20/${year}`) - +new Date();

  let timeLeft={}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft; 
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
const [year] = useState(new Date().getFullYear());


 useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

// ...
   
      return (
        <div>
               {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}

export default CountDownTimer;