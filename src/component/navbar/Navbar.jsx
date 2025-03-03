import { useContext, useEffect, useRef, useState } from "react"; // Import useEffect and useRef
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Logo/Logo.png";
import Logo2 from "./../../assets/Logo/Logo2.jpg";
import { FaHome, FaUserMd, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { AppNavigationContext } from "../../context/GlobalContext";
import { Authenticate } from "../../context/AutheContext";
import { jwtDecode } from "jwt-decode";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSidebarOpen } = useContext(AppNavigationContext);
  const { setToken, token, userName } = useContext(Authenticate);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/Login");
  };

  let decoded;
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      console.error("Invalid token");
    }
  }

  const userImage = "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isSidebarOpen ? (
        <nav className="dark:bg-gray-900 bg-white fixed w-full z-20 top-0 start-0">
          <div className="flex flex-wrap items-center justify-between w-[89%] mx-auto py-4">
            <Link to="/Home">
              <img src={Logo} className="h-12" alt="Logo" />
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
                        isActive ? "text-[#1E8ACB]" : "text-gray-400"
                      } lg:p-0 ${
                        isActive
                          ? "bg-[#1E8ACB] lg:bg-transparent"
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
                      `block py-2 rounded ${
                        isActive ? "text-[#1E8ACB]" : "text-gray-400"
                      } lg:p-0 ${
                        isActive
                          ? "bg-[#1E8ACB] lg:bg-transparent"
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
                      `block py-2 rounded ${
                        isActive ? "text-[#1E8ACB]" : "text-gray-400"
                      } lg:p-0 ${
                        isActive
                          ? "bg-[#1E8ACB] lg:bg-transparent"
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
                      `block py-2 rounded ${
                        isActive ? "text-[#1E8ACB]" : "text-gray-400"
                      } lg:p-0 ${
                        isActive
                          ? "bg-[#1E8ACB] lg:bg-transparent"
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
              {token ? (
                <div className="hidden lg:flex justify-between items-center space-x-2">
                  <img
                    src={userImage || "https://via.placeholder.com/40"}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-gray-700">
                    {decoded?.name || userName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="p-2.5 bg-gray-300 text-xl rounded-full"
                  >
                    <TbLogout />
                  </button>
                </div>
              ) : (
                <div className="hidden lg:flex justify-between items-center space-x-2">
                  <Link
                    to="/Login"
                    className="py-1 px-7 bg-gradient-to-r from-cyan-500 to-[#46C8BC] text-white rounded-md outline hover:outline-offset-2 hover:outline-cyan-400"
                  >
                    Login
                  </Link>

                  <Link
                    to="/Sign-up"
                    className="py-1 px-7 bg-transparent text-sky-300 border-2 border-sky-300 rounded-md hover:shadow-md "
                  >
                    Sign up
                  </Link>
                </div>
              )}
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg lg:hidden focus:outline-none"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <FiMenu className="w-6 h-6 text-teal-500" aria-hidden="true" />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          )}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-screen w-72 bg-gray-100 text-white transform z-20 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out px-2`}
          >
            {token ? (
              <div className="flex flex-col items-center justify-center p-4">
                <img
                  src={userImage || "https://via.placeholder.com/40"}
                  alt="User"
                  className="rounded-full"
                />
                <span className="text-gray-700">
                  {decoded?.name || userName}
                </span>
              </div>
            ) : (
              <Link to="/Home" className="flex items-center justify-center p-4">
                <img src={Logo2} alt="Unity Hospital Logo" />
              </Link>
            )}

            <ul className="space-y-2">
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  `flex items-center p-4 ${
                    isActive ? "text-[#1E8ACB]" : "text-gray-600"
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
                    isActive ? "text-[#1E8ACB]" : "text-gray-600"
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
                    isActive ? "text-[#1E8ACB]" : "text-gray-600"
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
                    isActive ? "text-[#1E8ACB]" : "text-gray-600"
                  } hover:bg-gray-200`
                }
              >
                <FaInfoCircle className="mr-3 text-[#1E8ACB]" />
                <span>About us</span>
              </NavLink>
            </ul>

            <div className="w-[90%] my-4 m-auto border-t border-gray-300"></div>

            <div className="p-4 flex flex-col gap-4">
              {token ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="py-1 px-4 bg-red-500 text-white rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/Login"
                    className="py-1 px-7 bg-gradient-to-r from-cyan-500 to-[#46C8BC] text-white rounded-md outline hover:outline-offset-2 hover:outline-cyan-400 text-center"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/Sign-up"
                    className="py-1 px-7 bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-md hover:shadow-md text-center"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="dark:bg-gray-900 bg-white top-0 start-0 end-0 fixed">
          <div className="grid w-[80%] m-auto items-center p-3 grid-cols-2">
            <Link to="/Home">
              <img src={Logo} className="h-12" alt="Logo" />
            </Link>

            <Link
              to="/Contact-us"
              className="font-sans justify-self-end text-gray-400"
            >
              Contact us
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarComponent;
