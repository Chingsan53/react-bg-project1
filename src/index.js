import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "jonas";
  return <h1>Hello React!!!!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//export default App;
