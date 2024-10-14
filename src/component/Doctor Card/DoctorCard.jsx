import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { img, name, specialty, rating } = doctor;
  
  return (
    <Link to="/Doctor-Info" className="py-4">
      <div className="relative bg-white pb-6 group mx-5">
        <div className="border-b-2 border-[#1e8acb] relative overflow-hidden group-hover:shadow-xl">
          <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#1E8ACB] to-25% via-transparent to-transparent z-10"></div>
          <img
            src={img}
            alt={name}
            className="transition-transform duration-300 m-auto w-full transform group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <div className="flex justify-between mt-2 items-center">
            <p className="text-blue-600 mb-2">{specialty}</p>
            <p className="flex justify-center items-center">
              {rating}
              <FaStar className="text-[#46C8BC] ml-1" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
