import { useState } from "react";
import Demo from "./pages/demo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Demo />
    </div>
  );
}

export default App;
