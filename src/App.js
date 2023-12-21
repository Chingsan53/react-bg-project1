import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data.slip.id);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Welcome to the advice portal!</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p><strong>Here is the advice: </strong>{advice}</p>
      <Message count={count}/>
      
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> of advice(s)</p>
  )
}