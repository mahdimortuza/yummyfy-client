import app from "@/firebase/firebase.config";
import { cn } from "@/lib/utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  // const handleLogout = () => {};
  return (
    <header className="h-14 py-12 bg-backdrop-blur-lg bg-black/50 backdrop-blur-md fixed top-0 z-50 w-full text-white">
      <div className=" h-full w-full max-w-[1300px]  px-5 mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link to="/">YummyFy</Link>

        {/* Desktop Navigation */}
        <ul className="space-x-5   hidden md:block">
          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[18px] text-white font-medium leading-[150%] px-3 py-1 rounded",
                {
                  " bg-tangerine text-red-500 border-red-500 border-b-2":
                    isActive,
                }
              )
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[18px] text-white font-medium leading-[150%] px-3 py-1 rounded",
                {
                  " bg-tangerine text-red-500 border-red-500 border-b-2":
                    isActive,
                }
              )
            }
            to="/recipes"
          >
            Recipes
          </NavLink>

          <button onClick={handleGoogleSignIn}>Google Login</button>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <X /> : <AlignRight />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F3F9FB] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <Link to="/">YummyFy</Link>

          {/* Mobile Navigation Items */}
          {/*  */}
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <button onClick={handleGoogleSignIn}>Google Login</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
