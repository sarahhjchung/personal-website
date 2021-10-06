import React from "react";
import NavBar from "../components/NavBar";
import { ReactComponent as MeSitting } from "../assets/MeSitting.svg";

function AboutMe() {
  return (
    <div className="bg-about min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="darkblue" />
        <h1 className="container italic font-bold">
          Here’s a short introduction
          <br className="md:inline lg:hidden hidden" /> of myself.
        </h1>
        <div className="container grid grid-cols-2">
          <div>
            <p className="font-bold">
              I am a 3rd year{" "}
              <span className="bg-darkblue rounded-lg bg-opacity-50">
                Computer Science
              </span>{" "}
              student at the{" "}
              <span className="bg-darkblue rounded-lg bg-opacity-50">
                University of Toronto
              </span>
              . I am passionate about web development, game design, UX/UI, and
              all creative things you can find in this large field!
            </p>
            <h4 className="font-bold italic mt-12"> Fun facts about me: </h4>
            <ul className="font-semibold opacity-80 list-decimal italic list-inside">
              <li>I’ve had 5 different hair colours in my life so far</li>
              <li>My current favourite video game is Stardew Valley</li>
              <li>
                I love animated shorts (favourites include One Small Step,
                Negative Space, and Hair Love)
              </li>
              <li>
                Sky photos are my favourite and you’ll find a lot of them on{" "}
                <a
                  href="https://vsco.co/sarah-chung/gallery"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-50 bg-darkblue rounded-lg bg-opacity-50"
                >
                  my VSCO
                </a>
              </li>
              <li>
                In summer 2020, I created{" "}
                <a
                  href="https://youtu.be/ybuqMkGXuDY"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-50 bg-darkblue rounded-lg bg-opacity-50"
                >
                  a lofi song
                </a>{" "}
                while in quarantine
              </li>
            </ul>
          </div>
          <MeSitting className="max-h-72 w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
