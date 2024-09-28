import { useContext } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Forgot.png";
import { Link } from "react-router-dom";
import { Navigation } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";

const Forgotten = () => {
  const { setFlag } = useContext(Navigation);

  setFlag(false);

  return (
    <>
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
      </Helmet>

      {/* Forgot Password Section */}
      <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 lg:px-0">
        {/* Form Section */}
        <form className="flex flex-col text-center lg:pb-5 p-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-lg lg:max-w-none bg-white rounded-lg shadow-lg lg:shadow-none">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Forgot your password?!
          </h1>
          <p className="font-medium lg:text-lg mb-6">
            Enter your email address and you will receive a code to reset your password.
          </p>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full max-w-md mx-auto py-2 px-4"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
            >
              Submit <GoTriangleRight />
            </button>
          </div>

          <p className="text-gray-500">
            Already have an account?
            <Link
              to="/Login"
              className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>

        {/* Image Section */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[40%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className=" relative top-16 lg:top-0 w-1/2 md:w-[40%] lg:w-[80%] xl:w-[60%]"
          />
        </div>
      </section>
    </>
  );
};

export default Forgotten;
