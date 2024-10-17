import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import img from "./../../assets/Forgot.png";
import { Link, useNavigate } from "react-router-dom";
import { AppNavigationContext } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";
import axios from "axios";
import { useFormik } from "formik";

const Forgotten = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const resetPasswordForm = async (values) => {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );

      console.log("Password reset link sent:", data);
      navigate("/Verify");
    } catch (error) {
      setError(error.response.data.message || "Something went wrong.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      await resetPasswordForm(values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col items-center justify-center h-screen 2xl:container mx-auto px-4 lg:px-8">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col text-center lg:pb-5 py-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg"
        >
          <h1 className="text-2xl lg:text-4xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Forgot your password?
          </h1>
          <p className="text-sm lg:text-lg font-medium mb-6">
            Enter your email address and you will receive a code to reset your password.
          </p>

          {error && <p className="text-red-500 text-sm lg:text-base mb-4">{error}</p>}

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-sm lg:text-base text-gray-900 rounded-lg focus:ring-teal-500 focus:border-teal-500 w-[90%] mx-auto py-2 px-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-sm lg:text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
              disabled={formik.isSubmitting}
            >
              Submit <GoTriangleRight />
            </button>
          </div>

          <p className="text-gray-500 text-sm lg:text-base">
            Already have an account?
            <Link
              to="/Login"
              className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-1/2 xl:w-[35%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className="relative top-16 lg:top-0 w-1/2 md:w-[40%] lg:w-1/2"
          />
        </div>
      </section>
    </>
  );
};

export default Forgotten;
