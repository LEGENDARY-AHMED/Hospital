import { useContext, useEffect } from "react";
import { AppNavigationContext } from "../../context/GlobalContext";
import Slider from "react-slick";
import DoctorCard from "../Doctor Card/DoctorCard";
import backgroundImg from "./../../assets/Field/Main/image 16.png";
import img1 from "./../../assets/Field/Doctors/Mask group-1.png";
import img2 from "./../../assets/Field/Doctors/Mask group-2.png";
import img3 from "./../../assets/Field/Doctors/Mask group-3.png";
import img from "./../../assets/Field/Doctors/Mask group.png";
import Mobdoctor from "./../../assets/Field/Main/Mobdoctor.png";
import Doctors from "./../../assets/Field/Main/doctors.png";
import Vectorright from "./../../assets/Field/Main/Vectorright.png";
import { Helmet } from "react-helmet";

export default function Field() {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);
  const doctors = [
    {
      img: img,
      name: "Dr. Morgan Schmidt",
      specialty: "Cardiology",
      rating: "4.9/5",
    },
    {
      img: img1,
      name: "Dr. David Garcia",
      specialty: "Psychiatry",
      rating: "4.7/5",
    },
    {
      img: img2,
      name: "Dr. Michael Lee",
      specialty: "Orthopedics",
      rating: "4.8/5",
    },
    {
      img: img3,
      name: "Dr. Emily Wang",
      specialty: "Neurology",
      rating: "4.8/5",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Field - Unity Hospital</title>
      </Helmet>
      <section className=" 2xl:container mx-auto mt-24">
        <section className="overflow-hidden ">
          <div className="flex ">
            <div>
              <img
                src="Unity Hospital\HomePage\Vector.png"
                className="w-24 xl:mt-11 xl:block lg:block md:block  hidden"
                alt=""
              />
            </div>
            <div className="md:w-full w-[90%] mx-auto  lg:grid md:grid-cols-2 flex flex-col-reverse justify-between align-middle items-center">
              <div className="md:ml-7">
                <h1 className="text-[#1E8ACB] font-bold xl:text-3xl md:text-2xl text-xl  mb-3">
                  What is Emergency Medicine ?!
                </h1>
                <p className="mb-9 xl:w-[88%] w-[100%] md:text-base text-sm">
                  Emergency Medicine is a medical specialty focused on the
                  immediate decision-making and action necessary to prevent
                  death or any further disability both in the pre-hospital
                  setting by directing emergency medical technicians and in the
                  emergency department. Here are some key aspects of Emergency
                  Medicine:
                </p>

                <h3 className="text-[#1E8ACB] font-semibold md:text-2xl text-lg mb-6">
                  Key aspects include:
                </h3>
                <ul className="list-disc grid gap-2 md:ml-9  ml-6">
                  <li className="md:text-lg text-base leading-5">
                    <span className="font-semibold">Scope:</span> Acute care for
                    diverse conditions in a fast-paced environment.
                  </li>
                  <li className="md:text-lg text-base leading-5">
                    <span className="font-semibold">Skills:</span> Rapid
                    assessment, life-saving procedures, and patient
                    stabilization.
                  </li>
                  <li className="md:text-lg text-base leading-5">
                    <span className="font-semibold">Training:</span> Residency
                    in Emergency Medicine, followed by board certification.
                  </li>
                  <li className="md:text-lg text-base leading-5">
                    <span className="font-semibold">Collaboration:</span>
                    Coordination with other specialists and healthcare staff.
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={Doctors}
                  alt=""
                  className="   max-w-[125%] lg:block hidden "
                />
                <img
                  src={Mobdoctor}
                  alt=""
                  className="mb-5 w-[30rem] lg:hidden block "
                />
              </div>
            </div>
            <div>
              <img
                src={Vectorright}
                alt=""
                className="xl:w-28 md:w-20 xl:mt-44 md:mt-40 md:block hidden "
              />
            </div>
          </div>
        </section>
        <section
          className="w-[90%] bg-cover bg-no-repeat mx-auto my-9"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <p className="font-bold p-7 md:text-3xl text-lg text-white text-center">
            “You will always be Safe with us”
          </p>
        </section>

        <section className="w-[90%] mx-auto my-11">
          <h1 className="text-2xl text-[#1E8ACB] font-bold my-8">
            Doctors working in that field
          </h1>
          <Slider {...settings}>
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </Slider>
        </section>
      </section>
    </>
  );
}
