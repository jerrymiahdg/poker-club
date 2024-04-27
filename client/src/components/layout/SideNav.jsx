import { Link } from "react-router-dom";

const SideNav = ({ active, ctx, logoutHandler }) => {
  return (
    <div
      className={`right-0 absolute border-neutral-100 duration-500 bg-white grid overflow-hidden transition-all ${
        active
          ? "grid-rows-[1fr] opacity-100 border-b border-l"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col gap-5 p-5">
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
        </div>
      </div>
    </div>
  );
};

export default SideNav;
