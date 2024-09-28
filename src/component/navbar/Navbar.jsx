import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../Unity Hospital/Logo/Logo.png";
import Logo2 from "./../../Unity Hospital/Logo/Logo2.JpG";
import { FaHome, FaUserMd, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";

import { Navigation } from "../../context/GlobalContext";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { flag } = useContext(Navigation);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {flag ? (
        <nav className="dark:bg-gray-900 bg-white fixed lg:relative w-full z-20 top-0 start-0">
          <div className="flex flex-wrap items-center justify-between w-[80%] mx-auto py-4">
            <Link to="/Home">
              <img src={Logo} className="h-9" alt="Logo" />
            </Link>

            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col gap-5 p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 lg:space-x-14 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/Home"
                    className={({ isActive }) =>
                      `block py-2 rounded ${
                        isActive ? "text-green-500" : "text-gray-400"
                      } lg:p-0 ${isActive ? "bg-[#1E8ACB] lg:bg-transparent" : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Find-a-doctor"
                    className={({ isActive }) =>
                      `block py-2 rounded ${
                        isActive ? "text-green-500" : "text-gray-400"
                      } lg:p-0 ${isActive ? "bg-[#1E8ACB] lg:bg-transparent" : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"}`
                    }
                  >
                    Find a doctor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact-us"
                    className={({ isActive }) =>
                      `block py-2 rounded ${
                        isActive ? "text-green-500" : "text-gray-400"
                      } lg:p-0 ${isActive ? "bg-[#1E8ACB] lg:bg-transparent" : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"}`
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About-us"
                    className={({ isActive }) =>
                      `block py-2 rounded ${
                        isActive ? "text-green-500" : "text-gray-400"
                      } lg:p-0 ${isActive ? "bg-[#1E8ACB] lg:bg-transparent" : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"}`
                    }
                  >
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex lg:order-2 space-x-3 lg:space-x-0">
              <div className=" hidden lg:flex justify-between items-center space-x-2">
                <Link
                  to="/Login"
                  className="py-1 px-7 bg-gradient-to-r from-cyan-500 to-[#46C8BC] text-white rounded-md hover:border"
                >
                  Login
                </Link>
                <Link
                  to="/Sign-up"
                  className="py-1 px-7 bg-transparent text-sky-300 border-b-2 border-e-2 border-sky-300 rounded-md hover:border"
                >
                  Sign up
                </Link>
              </div>
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`fixed top-0 left-0 h-screen w-72 bg-gray-100 text-white transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out px-2`}
          >
            <Link to="/Home" className="flex items-center justify-center p-4">
              <img src={Logo2} alt="Unity Hospital Logo" />
            </Link>

            <ul className="space-y-2">
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  `flex items-center p-4 ${
                    isActive ? "text-green-500" : "text-gray-600"
                  } hover:bg-gray-200`
                }
              >
                <FaHome className="mr-3 text-[#1E8ACB]" />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/Find-a-doctor"
                className={({ isActive }) =>
                  `flex items-center p-4 ${
                    isActive ? "text-green-500" : "text-gray-600"
                  } hover:bg-gray-200`
                }
              >
                <FaUserMd className="mr-3 text-[#1E8ACB]" />
                <span>Find a doctor</span>
              </NavLink>
              <NavLink
                to="/Contact-us"
                className={({ isActive }) =>
                  `flex items-center p-4 ${
                    isActive ? "text-green-500" : "text-gray-600"
                  } hover:bg-gray-200`
                }
              >
                <FaPhoneAlt className="mr-3 text-[#1E8ACB]" />
                <span>Contact us</span>
              </NavLink>
              <NavLink
                to="/About-us"
                className={({ isActive }) =>
                  `flex items-center p-4 ${
                    isActive ? "text-green-500" : "text-gray-600"
                  } hover:bg-gray-200`
                }
              >
                <FaInfoCircle className="mr-3 text-[#1E8ACB]" />
                <span>About us</span>
              </NavLink>
            </ul>
            <div className="w-[90%] my-4 m-auto border-t border-gray-300"></div>

            <div className="p-4 flex flex-col gap-4 ">
              <Link
                to="/Login"
                className="py-1 px-7 text-center bg-gradient-to-r from-cyan-500 to-[#46C8BC] text-white rounded-md"
              >
                Sign in
              </Link>
              <Link
                to="/Sign-up"
                className="py-1 px-7 text-center bg-white text-sky-300 border-b-2 border-e-2 border-sky-300 rounded-md hover:border"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="grid grid-cols-2 p-3 top-0 start-0 end-0 w-[80%] m-auto fixed items-center">
          <Link to="/Home">
            <img src={Logo} className="h-9" alt="Logo" />
          </Link>
          <Link
            to="/Contact-us"
            className="font-sans justify-self-end text-gray-400"
          >
            Contact us
          </Link>
        </nav>
      )}
    </>
  );
};

export default NavbarComponent;
