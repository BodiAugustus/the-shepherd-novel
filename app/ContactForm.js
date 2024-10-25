"use client";
import React, { useState } from "react";
import { db } from "../lib/firebase"; // Adjust the import based on your file structure
import { collection, addDoc } from "firebase/firestore";
import { Cinzel, Playfair_Display } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const ReadersAreaSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notify, setNotify] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        notify,
      });
      // Clear the form after submission
      setName("");
      setEmail("");
      setMessage("");
      setNotify(false);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-orange-500 text-black xs:px-4 md:px-0">
      <h2 className={`${cinzel.className} text-3xl mb-3 font-bold`}>
        Email the Author
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notify}
              onChange={() => setNotify(!notify)}
              className="form-checkbox h-5 w-5 text-orange-600"
            />
            <span className="ml-2 text-gray-700">
              Notify me of future releases
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ReadersAreaSection;
