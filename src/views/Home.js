import React from "react";
import Icons from "../components/Icons";
import { ReactComponent as Rewind } from "../assets/Rewind.svg";
import { ReactComponent as MeHalf } from "../assets/MeHalf.svg";

function Home() {
  return (
    <div className="bg-home min-h-screen bg-cover p-4 sm:p-12">
      <div className="space-y-12">
        <header className="flex items-center container">
          <Rewind
            href="/"
            className="cursor-pointer hover:opacity-50 inline float-left"
          />
          <Icons fillColour="fill-yellow" />
        </header>
        <h1 className="container italic font-bold">
          Hi! Welcome to Sarah Chung’s{" "}
          <br className="md:inline lg:hidden hidden" /> Portfolio.
        </h1>
        <div className="container grid grid-cols-2">
          <div className="space-y-4">
            <h4 className="italic font-bold">
              What would you like to learn about?
            </h4>
            <a
              href="/about"
              className="block hover:opacity-50 cursor-pointer font-bold text-yellow"
            >
              About me
            </a>
            <a
              href="/courses"
              className="block hover:opacity-50 cursor-pointer font-bold text-yellow"
            >
              Courses I've Taken
            </a>
            <a
              href="/projects"
              className="block hover:opacity-50 cursor-pointer font-bold text-yellow"
            >
              Projects
            </a>
            <a
              href="/work"
              className="block hover:opacity-50 cursor-pointer font-bold text-yellow"
            >
              Work Experience
            </a>
          </div>
          <MeHalf className="max-h-72 w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
