import React from "react";
import { ReactComponent as Resume } from "../assets/Resume.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Linkedin } from "../assets/Linkedin.svg";

const Icons = (fillColour) => {
  return (
    <div className={`ml-auto space-x-2`}>
      <Resume
        className={`cursor-pointer inline-block hover:opacity-50 w-8 h-8 px-1 ${fillColour.fillColour}`}
      />
      <a
        href="https://github.com/sarahhjchung"
        target="_blank"
        rel="noreferrer"
      >
        <Github
          className={`cursor-pointer inline-block hover:opacity-50 w-8 h-8 px-1 ${fillColour.fillColour}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sarah-chung-59a923202/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin
          className={`cursor-pointer inline-block hover:opacity-50 w-8 h-8 px-1 ${fillColour.fillColour}`}
        />
      </a>
    </div>
  );
};

export default Icons;
