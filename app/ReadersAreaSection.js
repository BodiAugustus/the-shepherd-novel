import React from "react";
import Link from "next/link";

const ReadersAreaSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-500 p-10 text-center">
      <p className="text-xl font-semibold mb-4 ">
        100% of all author profits for every book sold will be expressly used
        for helping to win in the fight to #FreeAshley.
      </p>
      <p className="text-lg mb-4">
        You can read about <span className="font-bold">her</span> story here:
      </p>
      <Link
        href="https://www.freeashley.org"
        target="_blank"
        className="text-yellow-200 text-xl hover:underline mb-6 underline-offset-8"
      >
        Ashley Oosthuizen
      </Link>
      <Link
        href="https://www.amazon.com/Shepherd-Bronze-Age-Tale/dp/1592113842"
        className="bg-orange-300 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out text-2xl"
        target="_blank"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default ReadersAreaSection;
