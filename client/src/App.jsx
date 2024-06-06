import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/layout/Nav";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Learn from "./components/pages/Learn";
import Standings from "./components/pages/Standings";

export const Context = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    fetch("http://localhost:3000/auth/is-logged-in", {
      mode: "cors",
      credentials: "include",
    }).then((res) => res.json().then((res) => setIsLoggedIn(res)));
  }, []);

  return (
    <>
      <Context.Provider value={{ isLoggedIn, setIsLoggedIn, width }}>
        <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
