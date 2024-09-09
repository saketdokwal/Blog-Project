import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/accounts/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ marginTop: 24 }}>
        <Login />
      </div>
    </>
  );
}

export default App;
