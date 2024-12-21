import { useEffect, useState } from "react";
import css from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <div className={css.container}>
      {`${time.getHours()}`.padStart(2, "0")}:
      {`${time.getMinutes()}`.padStart(2, "0")}
    </div>
  );
};

export default Clock;
