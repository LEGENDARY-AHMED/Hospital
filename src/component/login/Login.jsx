import { useContext } from "react";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import Google from "./../../Unity Hospital/Login/Social/Group 46.png";
import Facebook from "./../../Unity Hospital/Login/Social/Group 45.png";
import Apple from "./../../Unity Hospital/Login/Social/Group 44.png";
import img from "./../../Unity Hospital/Login/cuate.png";
import { Helmet } from "react-helmet";
import { Navigation } from "../../context/GlobalContext";

const Login = () => {
  const { setFlag  } = useContext(Navigation);
  setFlag(false)
  return (
    <>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Login - Unity Hospital</title>
        <meta name="description" content="Signup page for Unity Hospital" />
      </Helmet>
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-[80%] m-auto h-screen items-center">
        <form className="grid col-span-2 gap-4 text-center">
          <h1 className="text-6xl font-bold text-[#46C8BC]">Login</h1>
          <p className="text-gray-600 font-semibold lg:text-sm mb-2">
            Compassionate, top-quality care for our community.
          </p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />
          <Link to="/Forgot-pass" className="text-start me-auto text-blue-500">
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="flex items-center justify-center p-2 mb-2 text-2xl font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#4F8E89]"
          >
            Login
            <GoTriangleRight />
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="grid grid-cols-3 xl:w-[80%] xl:m-auto">
            <img src={Google} alt="Google login" className="w-16 mx-auto" />
            <img src={Facebook} alt="Facebook login" className="w-16 mx-auto" />
            <img src={Apple} alt="Apple login" className="w-16 mx-auto" />
          </div>
          <p className="text-gray-400">
            Don’t own an account?
            <Link to="/Sign-up" className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer">
              Signup
            </Link>
          </p>
          <Link to="/Home" className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer m-auto">
            Skip For later
          </Link>
        </form>
        <div className="hidden col-span-3 lg:block">
          <img src={img} alt="Illustration" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Login;
