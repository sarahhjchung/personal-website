import React from "react";
import NavBar from "../components/NavBar";
import { ReactComponent as MeStanding } from "../assets/MeStanding.svg";
// import { ReactComponent as Up } from "../assets/Up.svg";

function Work() {
  return (
    <div className="bg-work min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="lightPurple" />
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
            <a className="block opacity-80 hover:opacity-50" href="#internship">
              What was my internship?
            </a>
            <a className="block opacity-80 hover:opacity-50" href="#growth">
              My growth as a developer and student!
            </a>
            <a className="block opacity-80 hover:opacity-50" href="#impact">
              The impact I made on Techintern
            </a>
            <a className="block opacity-80 hover:opacity-50" href="#future">
              Wow... what’s next?
            </a>
          </div>
          <MeStanding className="max-h-96" />
        </div>
        <div className="container space-y-12">
          <div className="w-4/5 font-semibold">
            <h4 id="internship" className="italic">
              What was my internship?
            </h4>
            <br />
            <p className="opacity-70">
              Starting May 2021, I started interning at a startup called
              Techintern as a Full Stack Developer Intern.{" "}
              <a
                href="https://www.techintern.io/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                Techintern
              </a>{" "}
              connects many talented students with small and large companies who
              have internship opportunities in the tech field.
              <br />
              <br /> My work term was set to be 4 months long and I was hired to
              expedite the journey through the prodoct road map. Throughout my
              term, I learned the technology stack of the company’s web
              application and implemented various end-to-end features.
            </p>
          </div>
          <div className="w-4/5 ml-auto text-right font-semibold">
            <h4 id="impact" className="italic">
              The impact I made on Techintern
            </h4>
            <p className="opacity-70">
              Throughout my work term, I completed over 60 tasks belonging to
              several epics on the product road map. <br /> <br />
              Some of my greatest accomplishments include: designing and
              implementing my own original pages and features (ie.{" "}
              <a
                href="https://www.techintern.io/company/pricing"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                pricing page
              </a>{" "}
              , student profile page*, messaging*), revamping the{" "}
              <a
                href="https://www.techintern.io/student/signup"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                student
              </a>{" "}
              and{" "}
              <a
                href="https://www.techintern.io/company/signup"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                company
              </a>{" "}
              signup/login workflows so onboarding users require less
              communication with the sales team, revamping optin view* and
              applications view* for students to easily access, remove, and
              update their job applications and using a state machine for the
              first time in practice (something I previously learned in school)
              to better organize the workflow.
              <br /> <br />
              <span className="text-sm italic">
                * some pages are not viewable unless you're signed in as a
                student/company
              </span>
            </p>
          </div>
          <div className="w-4/5 font-semibold">
            <h4 id="growth" className="italic">
              My growth as a developer and student!
            </h4>
            <br />
            <p className="opacity-70">
              Before the internship, I was a student who only knew basic HTML
              and CSS, and Python with no SQL knowledge or fullstack experience.
              By the end of the summer, I was creating my own personal website
              using create-react-app and implementing various features for a
              company's web application.
              <br />
              <br />
              This summer was a huge learning experience for me. I learned
              React, Typescript, Flask, and SQL through reading documentations,
              completing tutorials, and reviewing the codebase. I also read
              about systems design, frontend testing, agile development, and
              product management. Side note: I’d say I got pretty good (and a
              little obsessed) with Notion.
              <br />
              <br />
              Diving deeper, here are some specific concepts I learned while
              working with a large web application:
              <ul className="list-inside list-disc">
                <li>using create-react-app</li>
                <li>using external APIs and libraries</li>
                <li>debugging using the inspector tool</li>
                <li>
                  creating end-to-end features that requires client-server
                  interactions
                </li>
                <li>
                  implementing asynchronous tasks to send timed bulk emails
                  using celery
                </li>
                <li>writing migrations</li>
                <li>relational data models</li>
              </ul>
            </p>
          </div>
          <div className="w-4/5 ml-auto  font-semibold text-right">
            <h4 id="future" className="italic">
              Wow... what’s next?
            </h4>
            <p className="opacity-70">
              My summer experience was really fun and served as a huge growth to
              myself as a student, software developer, and a clueless
              individual. Although full-stack development and web design is
              exciting to me, I look forward to searching for other new
              opportunities. As I'm currently taking courses in ML and will soon
              take courses in design, computer graphics, programming languages,
              and video games, I hope to be able to dip my toes into the various
              industries and fields in CS.
              <br />
              <br />
              Currently, I am working as a work-study web developer connected
              through{" "}
              <a
                href="https://hatchery.engineering.utoronto.ca/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                UofT Hatchery
              </a>{" "}
              with{" "}
              <a
                href="http://vincilabs.net/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 bg-purple rounded-lg bg-opacity-50 font-bold"
              >
                VinciLabs
              </a>
              .
            </p>
          </div>
        </div>
        {/* <a href="#">
          <Up className="container mt-12 fill-purple" />
        </a> */}
      </div>
    </div>
  );
}

export default Work;
