import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../../Unity Hospital/Logo/Logo.png";
import { Navigation } from "../../context/GlobalContext";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { flag} = useContext(Navigation);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {flag ? (

          <nav className="dark:bg-gray-900 fixed lg:relative w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between w-[80%] mx-auto py-4">
              <Link to="/Home" >
                <img src={Logo} className="h-6 sm:h-9" alt="Logo" />
              </Link>

              <div
                class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                id="navbar-sticky"
              >
                <ul class="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 lg:space-x-14 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink
                      to="/Home"
                      
                      className={({ isActive }) =>
                        `block py-2 rounded lg:p-0 ${
                          isActive
                            ? " bg-[#1E8ACB] lg:bg-transparent "
                            : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Find-a-doctor"
                      
                      className={({ isActive }) =>
                        `block py-2 rounded lg:p-0 ${
                          isActive
                            ? " bg-[#1E8ACB] lg:bg-transparent "
                            : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"
                        }`
                      }
                    >
                      Find a doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Contact-us"
                      
                      className={({ isActive }) =>
                        `block py-2 rounded lg:p-0 ${
                          isActive
                            ? " bg-[#1E8ACB] lg:bg-transparent "
                            : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"
                        }`
                      }
                    >
                      Contact us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/About-us"
                      
                      className={({ isActive }) =>
                        `block py-2 rounded lg:p-0 ${
                          isActive
                            ? " bg-[#1E8ACB] lg:bg-transparent "
                            : "hover:bg-[#1E8ACB] lg:hover:bg-transparent"
                        }`
                      }
                    >
                      About us
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex lg:order-2 space-x-3 lg:space-x-0">
                <div className="flex justify-between items-center space-x-2">
                  <Link to="/Login" className="hidden lg:block">
                    Login
                  </Link>
                  <Link to="/Sign-up"  className="hidden lg:block">
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
              className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <div className="flex items-center justify-between p-4">
                <Link to="/Home" >
                  <img src={Logo} className="h-6 sm:h-9" alt="Logo" />
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col p-4 space-y-4">
                <li>
                  <NavLink
                
                    to="/Home"  
                    className={({ isActive }) =>
                      `block py-2 rounded ${
                        isActive ? "bg-[#1E8ACB]" : "hover:bg-[#1E8ACB]"
                      }`
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
                        isActive ? "bg-[#1E8ACB]" : "hover:bg-[#1E8ACB]"
                      }`
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
                        isActive ? "bg-[#1E8ACB]" : "hover:bg-[#1E8ACB]"
                      }`
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
                        isActive ? "bg-[#1E8ACB]" : "hover:bg-[#1E8ACB]"
                      }`
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li className="block lg:hidden">
                  <Link to="/Login"  className="hover:text-orange-200">
                    Login
                  </Link>
                </li>
                <li className="block lg:hidden">
                  <Link to="/Sign-up"  className="hover:text-orange-200">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
      ) : (
        <nav className="grid grid-cols-2 p-3 top-0 start-0 end-0 w-[80%] m-auto fixed items-center">
        <Link to="/Home" >
          <img src={Logo} className="h-6 sm:h-9" alt="Logo" />
        </Link>
        <Link to="/Contact-us"  className="justify-self-end hidden lg:block">
          Contact us
        </Link>
      </nav>
      )}
    </>
  );
};

export default NavbarComponent;
