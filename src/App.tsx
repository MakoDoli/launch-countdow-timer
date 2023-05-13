import "./App.css";
import Contacts from "./Components/Contacts";
import { useEffect, useState } from "react";
import Numbers from "./Components/Numbers";

function App() {
  const [days, setDays] = useState<number | null>(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //set countdown time amount in seconds
    const timeSet = 1209600000;
    const countdownTime = new Date().getTime() + timeSet;
    const countDown = setInterval(function () {
      // Get the current time
      const now = new Date().getTime();

      // Find the distance between now and the countdown time
      const distance = countdownTime - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance <= 0) {
        clearInterval(countDown);
        console.log("Countdown finished!");
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, []);

  return (
    <main>
      <div className="main">
        <h1> WE'RE LAUNCHING SOON</h1>
        <div className="count">
          <Numbers number={days} />
          <Numbers number={hours} />
          <Numbers number={minutes} />
          <Numbers number={seconds} />
        </div>
        <div className="grid">
          <p className="parts">days</p>
          <p className="parts">hours</p>
          <p className="parts">minutes</p>
          <p className="parts">seconds</p>
        </div>
        <Contacts />
      </div>
    </main>
  );
}

export default App;
