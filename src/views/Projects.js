import React from "react";
import NavBar from "../components/NavBar";
import ProjectContainer from "../components/ProjectContainer";

function Projects() {
  return (
    <div className="bg-projects min-h-screen bg-cover p-4 sm:p-12">
      <div className="space-y-12">
        <NavBar colour="red" />
        <h1 className="container italic font-bold">
          Come check out my side projects!{" "}
        </h1>
        <div className="container grid grid-cols-2 gap-4">
          <ProjectContainer />
        </div>
      </div>
    </div>
  );
}

export default Projects;
