import { useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");
  const URL = import.meta.env.VITE_BACKEND_URL;
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch(URL);
    const data = await res.json();
    setResponse(data.message);
  };
  return (
    <div>
      <h1>Dashboard Analytics</h1>
      <button onClick={handleClick}>Click me to go to the server: {URL}</button>
      <h1>{response}</h1>
    </div>
  );
};

export default App;
