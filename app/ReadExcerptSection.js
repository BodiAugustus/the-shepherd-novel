"use client"; // Use client-side rendering
import React, { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css"; // Required styles
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

const ReadExcerptSection = () => {
  const docs = [{ uri: "/WebsiteVersion.pdf" }]; // Ensure the PDF is in the public folder

  return (
    <div className="bg-orange-500 p-6 xs:h-auto md:h-[100vh] pb-4">
      <h2 className={`${cinzel.className} text-3xl text-center font-bold mb-3`}>
        Read an Excerpt:
      </h2>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg max-h-[500px] overflow-y-scroll md:w-[55%] mx-auto">
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
      </div>
    </div>
  );
};

export default ReadExcerptSection;
