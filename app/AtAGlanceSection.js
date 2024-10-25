import { FaBookOpen, FaInfoCircle, FaUser } from "react-icons/fa"; // Importing icons
import { Cinzel, Playfair_Display } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const AtAGlanceSection = () => {
  return (
    <div className="bg-orange-500 p-6">
      <h2 className={`${cinzel.className} text-3xl text-center font-bold mb-6`}>
        At a Glance
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* First Item */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <FaBookOpen className="text-6xl text-yellow-300 mb-2" /> {/* Icon */}
          <p className="text-lg md:text-xl text-black">78000+ WORDS</p>
        </div>

        {/* Second Item */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <FaInfoCircle className="text-6xl text-yellow-300 mb-2" />{" "}
          {/* Icon */}
          <p className="text-lg md:text-xl text-black">HISTORICAL FICTION</p>
        </div>

        {/* Third Item */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <FaUser className="text-6xl text-yellow-300 mb-2" /> {/* Icon */}
          <p className="text-lg md:text-xl text-black">AGES 14+</p>
        </div>
      </div>
    </div>
  );
};

export default AtAGlanceSection;
