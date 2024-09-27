import React from "react";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
export default function HomePage() {
  const handlePaginationClick = (swiper) => {
    // Handle pagination click here, e.g., navigate to the clicked index
    const clickedIndex = swiper.clickedIndex; // Get the clicked index
    swiper.slideTo(clickedIndex); // Navigate to the clicked slide
  };

  return (
    <>
      <section>
        <div className="xl:grid grid-cols-2 lg:grid md:grid  mb-7 flex flex-col-reverse items-center   ">
          <div>
            {/* <img src="Unity Hospital\HomePage\Vector.png" alt="" /> */}
            <div className="flex gap-5 items-center align-middle">
              <img
                src="Unity Hospital\HomePage\Vector.png"
                className="w-[11%] xl:block lg:block md:block  hidden"
                alt=""
              />
              <div className="mt-11 w-[80%]  mx-auto">
                <p className="text-c2 text-xl font-bold">Welcome to</p>
                <div>
                  <h1 className="xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold ">
                    Unity Hospital{" "}
                    <p className="text-c2 mt-2">Top Quality care</p>
                  </h1>
                </div>
                <article className="text-cgray font-light xl:max-w-[54%] md:w-[80%] lg:w-[66%] w-72 mt-7 mb-7">
                  we unite advanced medical expertise with compassionate care to
                  ensure the health and well-being of our community.
                </article>
                <div className="xl:flex lg:flex md:flex   gap-2 mb-6">
                  <button className="bg-c2 xl:w-56 lg:w-48 w-full font-bold xl:px-14 lg:px-11  text-white px-7 rounded-md py-4 md:px-9 hover:scale-105 hover:border-2 hover:border-sky-300">
                    Get Started
                  </button>
                  <button className="bg-transparent xl:w-52 lg:w-48 w-full xl:mt-0 lg:mt-0 md:mt-0 mt-2  rounded-md text-black lg:px-10  font-bold border border-black md:px-5 xl:px-12  px-7 py-3 hover:scale-y-105">
                    Contact Us
                  </button>
                </div>
                <div className="">
                  <ul className="xl:flex-nowrap lg:flex-nowrap md:flex-nowrap  sm:flex-nowrap flex flex-wrap  justify-center items-center  align-middle lg:max-w-[88%] xl:max-w-[85%] md:w-[90%]">
                    <li>
                      <img src="Unity Hospital\HomePage\Frame 36.png" alt="" />
                    </li>
                    <li>
                      <img
                        src="Unity Hospital\HomePage\Frame 37.png"
                        className="w-[90%] mt-2"
                        alt=""
                      />
                    </li>
                    <li>
                      <img src="Unity Hospital\HomePage\Frame 38.png" alt="" />
                    </li>
                    <li>
                      <img src="Unity Hospital\HomePage\Frame 39.png" alt="" />
                    </li>
                    <li>
                      <img src="Unity Hospital\HomePage\Frame 40.png" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="Unity Hospital\HomePage\HeroSection.png"
              alt=""
              className="hidden xl:block lg:block md:block"
            />
            <img
              src="Unity Hospital\HomePage\Group9.png"
              alt=""
              className="xl:hidden lg:hidden md:hidden  w-[200%] shadow-md  shadow-c2 "
            />
          </div>
        </div>
      </section>
      <section className="bg-background-gradient bg-cover md:mt-11 relative xl:pb-52 lg:pb-52 pb-9 m">
        <div className="flex items-center justify-between align-middle  pt-7">
          <hr className="xl:max-w-[43%] lg:w-[42%] md:w-[40%] sm:w-[37%] w-[34%] border-2 rounded-md " />

          <h1 className="mx-2 font-bold  text-white xl:text-3xl lg:text-2xl sm:text-xl  text-lg md:text-[1.3rem]">
            Our Services
          </h1>
          <hr className="xl:max-w-[45%] lg:w-[42.5%] md:w-[40%] sm:w-[37%] w-[33%] border-2 rounded-md " />
        </div>

        <div className="grid gap-x-5 gap-y-14 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[80%] mx-auto mt-20">
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32 xl:w-40"
            />

            <h3 className="text-white   xl:text-xl  lg:text-[1.15rem]  md:text-xl sm:text-lg  my-2 font-bold">
              Emergency and Trauma Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px]">
              Providing 24/7 emergency services with rapid response teams and
              advanced trauma care units.
            </p>
          </div>
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54-1.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-xl  lg:text-xl  md:text-xl sm:text-lg  my-2 font-bold">
              Surgical Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px]">
              Offering a wide range of surgical procedures, including minimally
              invasive and robotic surgeries, performed by skilled surgeons.
            </p>
          </div>
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54-2.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-xl  lg:text-[1.15rem]   md:text-xl sm:text-lg  my-2 font-bold">
              Maternity and Neonatal Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px]">
              Comprehensive care throughout pregnancy, childbirth, and postnatal
              periods, with advanced NICUs for newborns.
            </p>
          </div>
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54-3.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-xl  lg:text-xl  md:text-xl sm:text-lg  my-2 font-bold">
              Cardiology Services Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px]">
              Advanced cardiac care including diagnostics, treatment, and
              rehabilitation for heart-related conditions.
            </p>
          </div>
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54-4.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-xl  lg:text-xl  md:text-xl sm:text-lg my-2 font-bold">
              Oncology Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px]">
              Specialized cancer treatment services, including chemotherapy,
              radiation therapy, and support programs.
            </p>
          </div>
          <div className="text-center">
            <img
              src="Unity Hospital\HomePage\Our Services\Group 54-5.png"
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white xl:text-xl  lg:text-xl  md:text-xl sm:text-lg  my-2 font-bold">
              Orthopedic Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] ">
              Expert care for bone, joint, and muscle conditions, including
              joint replacement, sports medicine, and rehabilitation.
            </p>
          </div>
        </div>
        <div className="absolute  mt-16 flex justify-center inset-x-0  ">
          <video
            className="shadow-lg rounded-md shadow-c2 xl:w-[880px] lg:w-[740px] md:w-[640px] sm:w-[440px] w-[360px]"
            height="360"
            controls
            poster="Unity Hospital\HomePage\image 6.png"
          >
            <source
              src="Unity Hospital\about-the-hospice-palliative-care-fellowship-program-cedars-sinai-academic-medicine-1080p.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="w-[90%] xl:w-[80%] lg:w-[85%] mx-auto xl:mt-80 lg:mt-80 md:mt-[28rem] mt-[22rem]">
        <div className="container mx-auto py-8">
          {/* Section Title */}
          <h2 className="xl:text-3xl text-2xl font-bold text-c2 mb-11">
            Our Fields
          </h2>

          {/* Grid Container */}
          <div className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 gap-6">
            {/* Emergency Medicine */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group.png"
                alt="Emergency Medicine"
                className="object-center h-64 w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Emergency Medicine
                </h3>
              </div>
            </div>

            {/* Cardiology */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-1.png"
                alt="Cardiology"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Cardiology
                </h3>
              </div>
            </div>

            {/* Oncology */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-2.png"
                alt="Oncology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Oncology
                </h3>
              </div>
            </div>

            {/* Orthopedics */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-3.png"
                alt="Orthopedics"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Orthopedics
                </h3>
              </div>
            </div>

            {/* Pediatrics */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-4.png"
                alt="Pediatrics"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Pediatrics
                </h3>
              </div>
            </div>

            {/* Gynecology and Obstetrics */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-5.png"
                alt="Gynecology and Obstetrics"
                className="object-center h-64 w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-[1.15rem] font-bold">
                  Gynecology and Obstetrics
                </h3>
              </div>
            </div>

            {/* Neurology */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-6.png"
                alt="Neurology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Neurology
                </h3>
              </div>
            </div>

            {/* Gastroenterology */}
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src="Unity Hospital\HomePage\Our fields\Mask group-7.png"
                alt="Gastroenterology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-xl font-bold">
                  Gastroenterology
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 xl:w-[80%] lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <div className="flex justify-between">
          <h1 className="xl:text-3xl text-2xl font-bold text-c2 mb-9">
            Top Rated Doctors
          </h1>
          <button className="text-xl hidden xl:inline-block lg:inline-block md:inline-block font-semibold text-c2 mb-11">
            Find more
          </button>
        </div>
        <div className="grid grid-cols-2  xl:grid-cols-4 lg:grid-cols-4 gap-5 ">
          <div className="relative group rounded-lg overflow-hidden ">
            <div className=" border-b-2 border-c2    ">
              <img
                src="Unity Hospital\HomePage\Top Rated Doctors\Mask group.png"
                alt=""
                className="w-[100%] hover:scale-105  "
              />
            </div>
            <h3 className="font-bold text-sm md:text-lg lg:text-lg  xl:text-xl mt-3">
              Dr. Morgan Schmidt
            </h3>
            <div className="flex justify-between">
              <p className="text-c2 text-sm xl:text-base">Cardiology</p>
              <p className="flex justify-center items-center">
                4.9/5 <FaStar className="text-sky-400 ml-1" />
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden ">
            <div className="border-b-2 border-c2">
              <img
                src="Unity Hospital\HomePage\Top Rated Doctors\Mask group-1.png"
                alt=""
                className="w-[100%] hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-sm md:text-lg lg:text-lg  xl:text-xl mt-3">
              Dr. David Garcia
            </h3>
            <div className="flex justify-between">
              <p className="text-c2 text-sm xl:text-base">Psychiatry</p>
              <p className="flex justify-center items-center">
                4.7/5 <FaStar className="text-sky-400 ml-1" />
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden ">
            <div className="border-b-2 border-c2">
              <img
                src="Unity Hospital\HomePage\Top Rated Doctors\Mask group-2.png"
                alt=""
                className="w-[100%] hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-sm md:text-lg lg:text-lg  xl:text-xl mt-3">
              Dr. Michael Lee
            </h3>
            <div className="flex justify-between">
              <p className="text-c2 text-sm xl:text-base">Orthopedics</p>
              <p className="flex justify-center items-center">
                4.8/5 <FaStar className="text-sky-400 ml-1" />
              </p>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden ">
            <div className="border-b-2 border-c2">
              <img
                src="Unity Hospital\HomePage\Top Rated Doctors\Mask group-3.png"
                alt=""
                className="w-[100%] hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-sm md:text-lg lg:text-lg  xl:text-xl mt-3">
              Dr. Emily Wang
            </h3>
            <div className="flex justify-between">
              <p className="text-c2 text-sm xl:text-base">Neurology</p>
              <p className="flex justify-center items-center">
                4.8/5 <FaStar className="text-sky-400 ml-1" />
              </p>
            </div>
          </div>
        </div>
        <button className="w-[100%] font-semibold text-white text-xl xl:hidden lg:hidden md:hidden py-4 mt-5 rounded-md bg-c2">
          Find more Doctors
        </button>
      </section>
      <section className="mt-36">
        <div className="relative bg-background-gradient py-8">
          <div className="container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-6 px-4 relative z-10">
            {/* Left side: Form */}
            <div className="flex items-center justify-center xl:text-left lg:text-left  text-center ">
              <form className=" ">
                <label
                  htmlFor="email"
                  className="block text-white text-lg mb-2"
                >
                  For more information or updates:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="xl:w-96 lg:w-96 md:w-80 w-80  px-4 py-2 rounded-lg mb-4 bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="xl:w-96 lg:w-96 md:w-80 w-80 py-2 border border-white text-white rounded-lg hover:bg-background-gradient  transition duration-300 text-lg font-bold"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right side: Quote */}
            <div className="flex items-center justify-center">
              <div className="text-center text-white relative">
                <FaQuoteLeft className="text-3xl" />
                <blockquote className="text-xl font-bold">
                  Your health is your wealth
                </blockquote>
                <p className="text-base">
                  Choose the best care with the best <strong>doctors</strong>.
                </p>
                <FaQuoteRight className="text-3xl absolute lg:left-80 md:left-80 xl:left-80 left-72 overflow-hidden" />
              </div>
            </div>
          </div>

          {/* Background logo on the right */}
          <div className="absolute inset-y-0 right-20 opacity-20 md:opacity-40 lg:opacity-60">
            <img
              src="Unity Hospital\Logo\Logo2.png"
              alt="Background logo"
              className="h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
