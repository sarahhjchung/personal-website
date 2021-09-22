import React from "react";
import NavBar from "../components/NavBar";
import { ReactComponent as MeStanding } from "../assets/MeStanding.svg";

function Work() {
  return (
    <div className="bg-work min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="purple" />
        <div className="container italic font-bold">
          <h1 className="leading-tight mb-4">
            Let me tell you about my work experience.
          </h1>
          <p>
            Just a warning, this is a longer read. But trust me, it’ll be worth
            it! There’s just a lot to share about all the things I learned from
            my internship last summer.
          </p>
        </div>
        <div className="container grid grid-cols-2">
          <div className="font-bold space-y-2">
            <h3 className="italic">Table of Contents</h3>
            <a className="block hover:opacity-50" href="#internship">
              What was my internship?
            </a>
            <a className="block hover:opacity-50" href="#skills">
              New skills I learned
            </a>
            <a className="block hover:opacity-50" href="#impact">
              The impact I made on Techintern
            </a>
            <a className="block hover:opacity-50" href="#growth">
              My growth as a student
            </a>
            <a className="block hover:opacity-50" href="#future">
              Wow... what’s next?
            </a>
          </div>
          <MeStanding className="max-h-96" />
        </div>
      </div>
    </div>
  );
}

export default Work;
