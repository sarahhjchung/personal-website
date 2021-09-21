import React from "react";
import NavBar from "../components/NavBar";

function Work() {
  return (
    <div className="bg-work min-h-screen bg-cover p-4 sm:p-12">
      <div className="space-y-12">
        <NavBar colour="purple" />
        <h1 className="container italic font-bold">
          Let me tell you about my work experience.
        </h1>
      </div>
    </div>
  );
}

export default Work;
