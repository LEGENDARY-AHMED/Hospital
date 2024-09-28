import { useContext } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Verify.png";
import { Navigation } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";

const Verify = () => {
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
        <form className="flex flex-col text-center lg:pb-0 p-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-lg lg:max-w-none bg-white rounded-lg shadow-lg lg:shadow-none">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Verify your Email address
          </h1>
          <p className="font-medium lg:text-lg mb-6 lg:w-[50%] m-auto">
            We Sent you a 6-digit code to example@gmail.com. Enter the code
            below to confirm your email address.
          </p>

          <div className="flex flex-col gap-4 m-auto">
            <div class="flex space-x-2">
              <input
                type="text"
                name="digit1"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                name="digit2"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                name="digit3"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                name="digit4"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                name="digit5"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
              <input
                type="text"
                name="digit6"
                maxlength="1"
                required
                class="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
              />
            </div>
            <p className="text-gray-500">
              Did not receive it ? 
              <button className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                Resend
              </button>
            </p>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
            >
              Submit <GoTriangleRight />
            </button>
          </div>
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[40%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className=" relative top-16 lg:top-0 w-[80%] md:w-[50%] lg:w-[90%]"
          />
        </div>
      </section>
    </>
  );
};

export default Verify;
