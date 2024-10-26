"use client"; // Use client-side rendering
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure the worker for pdf.js

import "react-pdf/dist/Page/TextLayer.css"; // Import text layer styles
import "react-pdf/dist/Page/AnnotationLayer.css"; // Import annotation layer styles
import { Cinzel, Playfair_Display } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// Configure the worker for pdf.js
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;
}

const ReadExcerptSection = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="bg-orange-500 p-6 xs:h-auto md:h-[100vh] pb-4">
      <h2 className={`${cinzel.className} text-3xl text-center font-bold mb-3`}>
        Read an Excerpt:
      </h2>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg max-h-[500px] overflow-y-scroll md:w-[55%] mx-auto">
        <Document
          file="/WebsiteVersion.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex justify-between mt-4">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            className="bg-gray-300 text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            className="bg-gray-300 text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadExcerptSection;
