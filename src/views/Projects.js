import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ProjectContainer from "../components/ProjectContainer";
import { ReactComponent as Expand } from "../assets/Expand.svg";
import { ReactComponent as Chxrry } from "../assets/Chxrry.svg";
import { ReactComponent as Conference } from "../assets/Conference.svg";
import { ReactComponent as LifeOS } from "../assets/LifeOS.svg";
import { ReactComponent as Spirit } from "../assets/Spirit.svg";
import { ReactComponent as Fitapp } from "../assets/Fitapp.svg";
import { ReactComponent as V2 } from "../assets/V2.svg";
import { ReactComponent as Lofi } from "../assets/Lofi.svg";

import lofiVid from "../assets/Lofi.mp4";
import blockyVid from "../assets/Blocky.mp4";
import chxrryVid from "../assets/Chxrry.mp4";

export const projectInfo = [
  {
    title: "Fitapp",
    description:
      "A fitness web application where users can upload posts about their fitness experiences using easy, user-friendly templates for different categories. Users are able to scroll through their explore page to view all these blog posts.",
    comment: "Made for Hack the North 2021.",
    github: "https://github.com/sarahhjchung/fitapp",
    link: "https://fitapp-app.herokuapp.com",
    techUsed: "React Javascript CSS PHP Heroku",
    img: <Fitapp className="w-full rounded-xl" />,
  },
  {
    title: "Personal Website V2",
    description: "You're on the site right now!",
    comment: "",
    github: "https://github.com/sarahhjchung/personal-website",
    link: "",
    techUsed: "React Javascript Tailwind CSS",
    img: <V2 className="w-full rounded-xl" />,
  },
  {
    title: "Spirit - DEMO",
    description:
      "A magazine issue for HartHouse DEMO's first online web-magazine. I worked as one of the web developers and worked closely with the design editor to design and implement pages on Webflow.",
    comment: "",
    github: "",
    link: "https://www.demomagazine.ca/spirit",
    techUsed: "Webflow",
    img: <Spirit className="hidden" />,
  },
  {
    title: "LifeOS",
    description:
      "A chrome extension made at nwHacks 2021 with a customizable timer and background nosies to help improve productivity and increase focus. I worked on the project as the front-end developer.",
    comment: "This was my first hackathon ever!",
    github: "https://github.com/sarahhjchung/lifeos",
    link: "https://devpost.com/software/lifeos",
    techUsed: "HTML CSS MithrilJS",
    img: <LifeOS className="hidden" />,
  },
  {
    title: "Conference Manager",
    description:
      "Final project for CSC207-Software Design with 7 other group members. A conference planning application consisting of multiple types of users interacting with the organizing/signup process of multiple types of events. Includes its own messaging program and many other features such as direct phone notifications to admin and a discord server for online conference options.",
    comment: "",
    github: "https://github.com/sarahhjchung/conference-planning-app",
    link: "",
    techUsed: "Java Twilio-API Discord-API",
    img: <Conference className="w-full rounded-xl" />,
  },
  {
    title: "Lofi Adventures",
    description:
      "A video game created from scratch. Choose different characters to play the game of avoiding falling enemies and use powerups to help gain a higher score. Includes original artwork and soundtrack. Have your audio on to hear the music!",
    comment: "",
    github: "",
    link: lofiVid,
    techUsed: "Python Pygame",
    img: <Lofi className="w-full rounded-xl" />,
  },
  {
    title: "Personal Website V1",
    description:
      "A website made from scratch with a main focus on using Bootstrap to develop a repsonive website.",
    comment: "",
    github: "https://github.com/sarahhjchung/sarahhjchung.github.io",
    link: "https://sarahhjchung.github.io/",
    techUsed: "HTML CSS Bootstrap Javascript",
    img: "",
  },
  {
    title: "Blocky",
    description:
      "A game developed for a project in CSC148. Implemented the moves and layout of the game board. Created a random computer opponent and a 'smart' computer opponent. Focus on trees.",
    comment: "",
    github: "https://github.com/sarahhjchung/Blocky",
    link: blockyVid,
    techUsed: "Python Pygame",
    img: "",
  },
  {
    title: "Chxrrypie's Website",
    description:
      "A website for illustrator @chxrry.pie to combine all of her art, social medias, shops, collaborations, giveaways, and more in one place for her followers to easily access. Best to view on a desktop.",
    comment: "This was the very first website I built!",
    github: "",
    link: chxrryVid,
    techUsed: "HTML CSS",
    img: <Chxrry className="w-full rounded-xl" />,
  },
];

function Projects() {
  const [projectName, setProjectName] = useState("Select a project ...");
  const [projectIndex, setProjectIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-projects min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="red" />
        <h1 className="container italic font-bold">
          Come check out my side projects!
        </h1>
        <div className="container">
          <div
            className="cursor-pointer w-full flex items-center border-2 border-red rounded-xl shadow-md px-3 py-1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <p className="text-red font-semibold opacity-70 mr-auto">
              {projectName}
            </p>
            <Expand className="fill-red p-1 ml-auto" />
          </div>
          {isExpanded && (
            <div
              onClick={() => setIsExpanded(false)}
              className="mt-2 relative cursor-pointer w-full flex items-center border-2 border-red rounded-xl shadow-md px-3 py-1"
            >
              <ul className="list-none font-semibold list-inside">
                <li
                  onClick={() => {
                    setProjectName("Fitapp");
                    setProjectIndex(0);
                  }}
                  className="hover:opacity-50"
                >
                  Fitapp
                </li>
                <li
                  onClick={() => {
                    setProjectName("Personal Website V2");
                    setProjectIndex(1);
                  }}
                  className="hover:opacity-50"
                >
                  Personal Website V2
                </li>
                <li
                  onClick={() => {
                    setProjectName("Spirit - DEMO");
                    setProjectIndex(2);
                  }}
                  className="hover:opacity-50"
                >
                  Spirit - DEMO
                </li>
                <li
                  onClick={() => {
                    setProjectName("LifeOS");
                    setProjectIndex(3);
                  }}
                  className="hover:opacity-50"
                >
                  LifeOS
                </li>
                <li
                  onClick={() => {
                    setProjectName("Conference Manager");
                    setProjectIndex(4);
                  }}
                  className="hover:opacity-50"
                >
                  Conference Manager
                </li>
                <li
                  onClick={() => {
                    setProjectName("Lofi Adventures");
                    setProjectIndex(5);
                  }}
                  className="hover:opacity-50"
                >
                  Lofi Adventures
                </li>
                <li
                  onClick={() => {
                    setProjectName("Personal Website V1");
                    setProjectIndex(6);
                  }}
                  className="hover:opacity-50"
                >
                  Personal Website V1
                </li>
                <li
                  onClick={() => {
                    setProjectName("Blocky");
                    setProjectIndex(7);
                  }}
                  className="hover:opacity-50"
                >
                  Blocky
                </li>
                <li
                  onClick={() => {
                    setProjectName("Chxrrypie’s Website");
                    setProjectIndex(8);
                  }}
                  className="hover:opacity-50"
                >
                  Chxrrypie’s Website
                </li>
              </ul>
            </div>
          )}
        </div>
        {projectName !== "Select a project ..." && (
          <ProjectContainer
            className="container"
            title={projectName}
            description={projectInfo[projectIndex].description}
            comment={projectInfo[projectIndex].comment}
            github={projectInfo[projectIndex].github}
            link={projectInfo[projectIndex].link}
            techUsed={projectInfo[projectIndex].techUsed}
            img={projectInfo[projectIndex].img}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
