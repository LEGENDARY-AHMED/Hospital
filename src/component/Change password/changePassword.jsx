import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import img from "./../../assets/Confirm.png";
import { AppNavigationContext } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Change = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  return (
    <>
      <Helmet>
        <title>Change Password - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col items-center justify-center h-screen 2xl:container mx-auto px-4 lg:px-8">
        <form className="flex flex-col text-center lg:pb-5 py-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Change Your Password
          </h1>
          <h2 className="font-medium lg:text-lg mb-4">Change every 90 days.</h2>
          <p className="text-sm lg:text-lg font-medium mb-6">
            8+ characters with a mix of uppercase, lowercase, numbers, and
            special characters.
          </p>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-[90%] mx-auto py-2 px-4"
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-[90%] mx-auto py-2 px-4"
            />
            <button
              type="submit"
              onClick={() => navigate("/Login")}
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
            >
              Confirm <GoTriangleRight />
            </button>
          </div>
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-1/2 xl:w-[35%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Change Password"
            className="relative top-16 lg:top-0 w-1/2 md:w-[40%] lg:w-1/2"
          />
        </div>
      </section>
    </>
  );
};

export default Change;
