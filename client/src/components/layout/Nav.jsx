import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo";
import { AlignRight } from "lucide-react";
import MobileNav from "./SideNav";

const Nav = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const [sideNavActive, setSideNavActive] = useState(false);

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
    <>
      <div className="flex justify-center w-full border-b border-neutral-100">
        <div className="flex max-w-5xl w-full justify-between gap-5 p-5  items-center">
          <Link
            to="/"
            className="font-bold text-5xl bg-gradient-to-b from-neutral-400 to-neutral-800 inline-block text-transparent bg-clip-text"
          >
            {ctx.width > 950 ? "MHS Poker Club" : <Logo />}
          </Link>
          <div className="flex gap-5 items-center">
            {ctx.width > 600 ? (
              <>
                <Link to="/learn" className="text-lg">
                  <div className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 ">
                    Learn
                  </div>
                </Link>
                <Link to="/standings" className="text-lg">
                  <div className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 ">
                    Standings
                  </div>
                </Link>
                <Link to="/about" className="text-lg">
                  <div className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 ">
                    About
                  </div>
                </Link>
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
              </>
            ) : (
              <>
                <button
                  className="p-2 text-lg bg-transparent rounded-md transition-all hover:bg-neutral-100 "
                  onClick={() => setSideNavActive(!sideNavActive)}
                >
                  <AlignRight />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <MobileNav
        active={sideNavActive}
        ctx={ctx}
        logoutHandler={logoutHandler}
      />
    </>
  );
};

export default Nav;
