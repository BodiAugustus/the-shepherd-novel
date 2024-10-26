import React from "react";
import Image from "next/image"; // Import the Image component
import { Cinzel, Playfair_Display } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="bg-orange-400 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Left Container for Logo */}
        <div className="flex-1">
          <Image
            src="/histria.png" // Path to your logo
            alt="Histria Books"
            width={192} // Set appropriate width
            height={48} // Set appropriate height
            className="w-20 md:w-48" // Responsive size for the logo
          />
        </div>

        {/* Middle Container for Book Title and Date */}
        <div className="flex-1 text-center">
          <h1
            className={`${cinzel.className} xs:text-xl md:text-3xl text-black font-bold`}
          >
            The Shepherd
          </h1>
          <h2
            className={`${cinzel.className} xs:text-xs md:text-xl text-black italic`}
          >
            A Bronze Age Tale
          </h2>
          <p className={`${cinzel.className} text-black md:text-lg`}>2024</p>
        </div>

        {/* Right Container for Hashtag */}
        <div className="flex-1 text-right">
          <p className="text-black md:text-2xl">#FreeAshley</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
