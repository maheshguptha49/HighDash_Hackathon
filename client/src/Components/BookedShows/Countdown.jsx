import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

export function CountDownParent({ showTime, setShowStarted }) {
  console.log(showTime, "showTime in parent");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setInterval(() => countDown(showTime), 1000);

    setLoading(false);

    return () => clearInterval(id);
  }, [showTime, days, hours, minutes, seconds]);
  function countDown(showTime) {
    const endDate = new Date(`${showTime}`).getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    let timeDays = Math.floor(timeDiff / d);
    let timeHours = Math.floor((timeDiff % d) / h);
    let timeMinutes = Math.floor((timeDiff % h) / m);
    let timeSeconds = Math.floor((timeDiff % m) / s);
    if (timeHours <= 0 && timeMinutes <= 0 && timeSeconds <= 0) {
      setShowStarted(true);
      return;
    }
    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  }

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <section className={styles.container}>
          <h1>Show Starting In</h1>
          <div className={styles.countdown}>
            <article>
              <p>{days}</p>
              <h3>Days</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>Hours</h3>
            </article>
            <article>
              <p>{minutes}</p>
              <h3>Minutes</h3>
            </article>
            <article>
              <p>{seconds}</p>
              <h3>Seconds</h3>
            </article>
          </div>
        </section>
      )}
    </>
  );
}
