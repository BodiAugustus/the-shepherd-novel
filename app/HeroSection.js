// components/HeroSection.js

import Image from "next/image";
import Link from "next/link";
import bgWallpaper from "../public/bg2.jpg";
import bookCover from "../public/cover.jpeg";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen -mb-7 ">
      <Image
        src={bgWallpaper} // Path to your background image
        alt="Background"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority // This image is the Largest Contentful Paint (LCP) element
      />
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 relative ">
        <div className="xs:hidden md:block  md:w-1/4 md:mx-10">
          <h1
            className={`${cinzel.className} text-white text-6xl text-center `}
          >
            The Slave Boy
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <p className="text-white text-lg mb-4">
            Written in dedication of{" "}
            <span className="text-orange-500 ">
              <Link
                href="https://www.freeashley.org"
                target="_blank"
                className=" hover:text-orange-600 transition duration-300 ease-in-out"
              >
                Ashley Oosthuizen
              </Link>
            </span>
          </p>
          <Image
            src={bookCover} // Path to your book cover image
            alt="The Shepherd"
            width={300} // Specify the width for the book cover image
            height={450} // Specify the height for the book cover image
            className="mb-4 object-contain" // Ensure the image scales well
          />
          <Link
            href="https://www.amazon.com/Shepherd-Bronze-Age-Tale/dp/1592113842"
            className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out text-2xl"
            target="_blank"
          >
            Buy Now
          </Link>
        </div>
        <div className="xs:hidden md:block  md:w-1/4 md:mx-10 ">
          <h1
            className={`${cinzel.className} text-white text-6xl text-center `}
          >
            Who Defied a Tyrant
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
