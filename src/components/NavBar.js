import React, { useState } from "react";
import { ReactComponent as Rewind } from "../assets/Rewind.svg";
import { ReactComponent as Menu } from "../assets/Menu.svg";
import Icons from "./Icons";
import useWindowSize from "../hooks/useWindowSize";

const NavBar = (colour) => {
  const { width: windowWidth } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdown = () => {
    return (
      <div
        className={`absolute border-2 border-${colour.colour} shadow-md cursor-pointer bg-white rounded-xl p-4`}
      >
        <a
          href="/about"
          className={`block hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          About me
        </a>
        <a
          href="/courses"
          className={`block hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Courses
        </a>
        <a
          href="/projects"
          className={`block hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Projects
        </a>
        <a
          href="/work"
          className={`block hover:opacity-50 cursor-pointer font-bold text-${colour.colour}`}
        >
          Work Experience
        </a>
      </div>
    );
  };

  return (
    <div className="container flex">
      <div className="space-x-4 flex items-center">
        <a href="/">
          <Rewind
            href="/"
            className="cursor-pointer hover:opacity-50 inline float-left"
          />
        </a>
        {windowWidth < 440 ? (
          <div>
            <Menu
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-8 h-8 p-1 inline fill-${colour.colour} hover:opacity-50 cursor-pointer`}
            />
            {isExpanded && dropdown()}
          </div>
        ) : (
          <div className="space-x-4 flex items-center">
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
        )}
      </div>
      <Icons fillColour={`fill-${colour.colour}`} />
    </div>
  );
};

export default NavBar;
