// import { useContext } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Forgot.png";
import { Link } from "react-router-dom";
// import GlobalContext from "../../context/GlobalContext";

const Forgotten = () => {
  // const { setFlag } = useContext(GlobalContext);

  // console.log(setFlag(false));

  return (
    <>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
        <meta
          name="description"
          content="Forgot password page for Unity Hospital"
        />
      </Helmet>

      {/* Forgot Password Section */}
      <section className="grid grid-cols-1 w-[80%] m-auto h-screen items-center">
        <form className=" lg:self-end grid gap-4 text-center">
          <h1 className="text-4xl font-bold text-[#46C8BC]">
            Forgot your password ?!
          </h1>
          <p className="text-gray-600 font-semibold lg:text-sm mb-2">
            Enter your email address and you will receive a code then enter it
            to reset your password.
          </p>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
            <button
              type="submit"
              className="flex items-center justify-center p-2 mb-2 text-2xl font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#4F8E89]"
            >
              Submit
            </button>
          </div>

          <p className="text-gray-400">
            Already have an account?
            <Link
              to="/Login"
              className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
        <div className="hidden lg:block w-[40%] m-auto">
          <img src={img} alt="Forgot Password" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Forgotten;
