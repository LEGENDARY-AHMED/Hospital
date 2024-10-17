// Doctor.js
import { useContext, useEffect, useState } from "react";
import { AppNavigationContext } from "../../context/GlobalContext";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import DoctorCard from "../Doctor Card/DoctorCard";
import "./Doctors.css";
import img1 from "./../../assets/Field/Doctors/Mask group-1.png";
import img2 from "./../../assets/Field/Doctors/Mask group-2.png";
import img3 from "./../../assets/Field/Doctors/Mask group-3.png";
import img from "./../../assets/Field/Doctors/Mask group.png";
import { Helmet } from "react-helmet";

const Doctors = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);

  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearch = () => {
    if (searchQuery.trim() && !tags.includes(searchQuery)) {
      let newTags = [...tags, searchQuery];

      if (newTags.length > 7) newTags.shift();

      setTags(newTags);
    }
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Doctors - Unity Hospital</title>
      </Helmet>
      <div className="my-16 2xl:container mx-auto">
        <div className="w-[92%] mx-auto p-6">
          <div className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              className="rounded-md p-3 w-full focus:border-gray-300 focus:ring-gray-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={handleSearch}
                className="p-2 flex items-center justify-center"
              >
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Tag Filtering Section */}
          <div className="flex flex-wrap mb-6 gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 rounded-full ${
                  searchQuery === tag ? "bg-blue-500 text-white" : "bg-gray-200"
                } hover:bg-blue-500 hover:text-white transition`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Doctor Listing */}
          <section>
            {searchQuery ? (
              <>
                <h2 className="text-2xl text-[#1E8ACB] font-semibold mb-4">
                  Search Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDoctors.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl text-[#1E8ACB] font-semibold mb-4">
                  Top Rated Doctors
                </h2>
                <Slider {...settings}>
                  {doctors.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                  ))}
                </Slider>

                {/* Today's Available Doctors */}
                <section className="my-8">
                  <h2 className="text-2xl text-[#1E8ACB] font-semibold mb-4">
                    Today's Available Doctors
                  </h2>
                  <Slider {...settings}>
                    {doctors.map((doctor, index) => (
                      <DoctorCard key={index} doctor={doctor} />
                    ))}
                  </Slider>
                </section>

                {/* All Doctors Section */}
                <section>
                  <h2 className="text-2xl text-[#1E8ACB] font-semibold mb-4">
                    All Doctors
                  </h2>
                  <Slider {...settings}>
                    {doctors.map((doctor, index) => (
                      <DoctorCard key={index} doctor={doctor} />
                    ))}
                  </Slider>
                </section>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Doctors;
