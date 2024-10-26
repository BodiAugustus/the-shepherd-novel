"use client";
import React, { useState, useEffect } from "react";
import { Cinzel, Playfair_Display } from "next/font/google";
import Image from "next/image"; // Importing Next.js Image component

const cinzel = Cinzel({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// Sample review data
const reviews = [
  {
    name: "Maria Huang",
    text: "Highly recommended for anyone who loves a good story. Really intense at some points but super enjoyable overall. I'll keep on the lookout for book two!",
    image: "/review1.jpg", // Replace with your image path
  },
  {
    name: "Sarha Densipi",
    text: "A gripping tale that kept me on the edge of my seat. The characters are well-developed, and the story is beautifully woven.",
    image: "/review2.jpg", // Replace with your image path
  },
  {
    name: "Jessica Singleton",
    text: "Beautifully written and powerful! It hooks you from the first page and doesn't let go until the end! I can't wait for the next one! #FreeAshley!",
    image: "/review6.jpg", // Replace with your image path
  },
  {
    name: "Jason Toma",
    text: "I bought this book as a way to help Ashley Oosthuizen. It actually turned out to be really good. #FreeAshley",
    image: "/review7.jpg", // Replace with your image path
  },
  {
    name: "Evelyn Basin",
    text: "This is the best war story I've read in a really long time. Epic battle scenes. Really loved the characters Yusri and Grieves as well. I hope they make it to book 2!",
    image: "/review8.jpg", // Replace with your image path
  },
  // Add more reviews as needed
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="bg-orange-500 pt-10 h-auto pb-10 xs:px-4 md:px-0">
      <h2 className={`${cinzel.className} text-center text-3xl font-bold pb-2`}>
        Reader Reviews
      </h2>
      <div className="carousel-container">
        <div className="carousel-item">
          <Image
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="review-image"
            width={200} // Set an appropriate width
            height={200} // Set an appropriate height
            layout="intrinsic" // Ensures the image keeps its aspect ratio
          />
          <h3 className="font-bold pt-4">{reviews[currentIndex].name}</h3>
          <p className="leading-tight">{reviews[currentIndex].text}</p>
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>
          ←
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
