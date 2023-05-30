import React, { useState } from "react";
import styles from "./Counter.module.scss";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter((prev) => prev + 1);

  return (
    <>
      <div>{counter}</div>
      <div>sdfsdfdsfsfsdf</div>
      <button className={styles.test} onClick={handleIncrement}>
        Increment
      </button>
    </>
  );
};
