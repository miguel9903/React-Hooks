import { useState, useEffect } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);
  const increaseCounter = () => {
    setCounter((prevValue) => prevValue + 1);
  };
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevValue) => prevValue - 1);
    }
  };
  return [counter, increaseCounter, decreaseCounter];
};

const Interval = ({ counter }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);
  return <p>Interval</p>;
};

const UseState = ({ start = 0 }) => {
  const [counter, increaseCounter, decreaseCounter] = useCounter(0);
  useEffect(() => {
    document.title = counter;
  }, [counter]);
  return (
    <>
      <p>Counter: {counter} </p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
      {/*<Interval counter={counter} /> */}
    </>
  );
};

export default UseState;
