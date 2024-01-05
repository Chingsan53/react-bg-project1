import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

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
        <span>Step: {step}</span>
        <button onClick={stepCountIncrease}>+</button>
      </div>
      <div>
        <button onClick={countDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={countIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? `Today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} days from today is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
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
