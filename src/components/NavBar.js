import React from "react";
import { ReactComponent as Rewind } from "../assets/Rewind.svg";
import Icons from "./Icons";

const NavBar = (colour) => {
  return (
    <div className="container">
      <div className="space-x-4 inline-block">
        <a href="/">
          <Rewind
            href="/"
            className="cursor-pointer hover:opacity-50 inline float-left"
          />
        </a>
        <a
          href="/about"
          className={`hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          About me
        </a>
        <a
          href="/courses"
          className={`hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Courses
        </a>
        <a
          href="/projects"
          className={`hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Projects
        </a>
        <a
          href="/work"
          className={`hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Work Experience
        </a>
      </div>
      <Icons fillColour={`fill-${colour.colour}`} />
    </div>
  );
};

export default NavBar;
