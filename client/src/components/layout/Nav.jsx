import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo";

const Nav = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = () => {
    fetch("http://localhost:3000/auth/logout", {
      credentials: "include",
      mode: "cors",
    }).then(() => {
      navigate("/login");
      ctx.setIsLoggedIn(false);
    });
  };

  return (
    <div className="flex justify-center w-full border-b border-neutral-100">
      <div className="flex max-w-5xl w-full justify-between gap-5 p-5  items-center">
        <Link
          to="/"
          className="font-bold text-5xl bg-gradient-to-b from-neutral-400 to-neutral-800 inline-block text-transparent bg-clip-text"
        >
          {ctx.width > 700 ? "MHS Poker Club" : <Logo />}
        </Link>
        <div className="flex gap-5">
          {ctx.isLoggedIn ? (
            <>
              <button
                onClick={logoutHandler}
                className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 "
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="text-lg">
                <div className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 ">
                  Sign up
                </div>
              </Link>
              <Link to="/login" className="text-lg">
                <div className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 ">
                  Log in
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
