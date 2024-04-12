import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/layout/Nav";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

export const Context = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/auth/is-logged-in", {
      mode: "cors",
      credentials: "include",
    }).then((res) => res.json().then((res) => setIsLoggedIn(res)));
  }, []);

  return (
    <>
      <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
