import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepCountIncrease = () => {
    if (step < 10) {
      setStep((s) => s + 1);
    }
  };

  const stepCountDecrease = () => {
    if (step) {
      setStep((s) => s - 1);
    }
  };

  const countIncrease = () => {
    setCount((updatedStep) => updatedStep + step);
  };

  const countDecrease = () => {
    setCount((updatedStep) => updatedStep - step);
  };

  return (
    <div>
      <h1>Date Counter</h1>
      <div>
        <button onClick={stepCountDecrease}>-</button>
        <p>Step: {step}</p>
        <button onClick={stepCountIncrease}>+</button>
      </div>
      <div>
        <button onClick={countDecrease}>-</button>
        <p>Count: {count}</p>
        <button onClick={countIncrease}>+</button>
      </div>
      <p>{count} days from today is </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
