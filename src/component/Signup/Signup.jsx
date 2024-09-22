import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { Helmet } from "react-helmet";
import Google from "./../../Unity Hospital/Signup/Social/Group 46.png";
import Facebook from "./../../Unity Hospital/Signup/Social/Group 45.png";
import Apple from "./../../Unity Hospital/Signup/Social/Group 44.png";
import img from "./../../Unity Hospital/Signup/cuate.png";
import { Navigation } from "../../context/GlobalContext";
import { useContext } from "react";

const Signup = () => {
  const { setFlag } = useContext(Navigation);
  setFlag(false);
  return (
    <>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Signup - Unity Hospital</title>
        <meta name="description" content="Signup page for Unity Hospital" />
      </Helmet>

      {/* Signup Section */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-[80%] m-auto h-screen items-center">
        <form className="grid col-span-2 gap-4 text-center">
          <h1 className="text-6xl font-bold text-[#46C8BC]">Signup</h1>
          <p className="text-gray-600 font-semibold lg:text-sm mb-2">
            Compassionate, top-quality care for our community.
          </p>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="First name"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Last name"
                required
              />
            </div>
          </div>

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
          <input
            type="password"
            id="confermPassword"
            name="confermPassword"
            placeholder="Confirm Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          />

          {/* Signup Button */}
          <button
            type="submit"
            className="flex items-center justify-center p-2 mb-2 text-2xl font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#4F8E89]"
          >
            Sign up
            <GoTriangleRight />
          </button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Signup Options */}
          <div className="grid grid-cols-3 xl:w-[80%] xl:m-auto">
            <img src={Google} alt="Google Signup" className="w-16 mx-auto" />
            <img
              src={Facebook}
              alt="Facebook Signup"
              className="w-16 mx-auto"
            />
            <img src={Apple} alt="Apple Signup" className="w-16 mx-auto" />
          </div>

          {/* Links */}
          <p className="text-gray-400">
            Don’t own an account?
            <Link
              to="/Login"
              className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          </p>
          <Link
            to="/Home"
            className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer m-auto"
          >
            Skip For later
          </Link>
        </form>

        {/* Illustration */}
        <div className="hidden col-span-3 lg:block">
          <img src={img} alt="Illustration" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Signup;
