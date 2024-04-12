import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(Context);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      mode: "cors",
      type: "include",
      credentials: "include",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) =>
      res.json().then((res) => {
        if (res === "LOGIN SUCCESSFUL") {
          ctx.setIsLoggedIn(true);
          navigate("/");
        }
      })
    );
  };

  useEffect(() => {
    if (ctx.isLoggedIn) navigate("/");
  }, []);

  return (
    <div className="flex justify-center w-full pt-20">
      <div className="flex max-w-lg w-full p-5">
        <form
          onSubmit={loginHandler}
          className="px-5 py-10 w-full flex flex-col gap-10 border border-neutral-100 rounded-lg"
        >
          <h1 className="text-4xl font-bold">Log in</h1>
          <input
            className="p-2 bg-neutral-100 rounded-md outline-none focus:shadow-md"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 bg-neutral-100 rounded-md outline-none focus:shadow-md"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-teal-100 p-2 opacity-80 hover:opacity-100 rounded-md"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
