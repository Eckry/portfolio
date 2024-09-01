import { useEffect, useState } from "react";
import { days, months } from "../consts.d";

function getTime() {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const timeOffset = -6;
  const mexicoTime = new Date(utcTime + 3600000 * timeOffset);

  const time = `${mexicoTime.getHours()}:${
    mexicoTime.getMinutes() > 9
      ? mexicoTime.getMinutes()
      : `0${mexicoTime.getMinutes()}`
  }`;

  return { time, mexicoTime };
}

export default function Timer() {
  const { time, mexicoTime } = getTime();
  const [hour, setHour] = useState(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { time } = getTime();
      setHour(time);
    }, 40000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p className="about-p location-p">
        <span className="about-highlight time">{hour}</span> UTC-6
      </p>
      <p className="about-p location-p">
        {days[mexicoTime.getDay()]}, {months[mexicoTime.getMonth()]}{" "}
        {mexicoTime.getDate()}
      </p>
    </>
  );
}
