import React from "react";
import NavBar from "../components/NavBar";

function Courses() {
  return (
    <div className="bg-courses min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="green" />
        <h1 className="container italic font-bold">
          These are some courses I’ve taken or am in the middle of taking:
        </h1>
        <div className="container space-y-4">
          <div className="border-4 border-green rounded-2xl p-4 shadow-md">
            <p className="font-bold italic text-center">
              Program Requirements:
            </p>
            <ul className="list-none font-semibold opacity-80 list-inside space-y-1">
              <li>CSC108 - Intro to Computer Programming</li>
              <li>CSC148 - Intro to Computer Science</li>
              <li>
                CSC165 - Mathematical Expression and Reasoning for Computer
                Science
              </li>
              <li>MAT137 - Calculus with Proofs</li>
              <li>MAT223 - Linear Algebra I</li>
              <li>CSC207 - Software Design</li>
              <li>CSC236 - Introduction to the Theory of Computation</li>
              <li>STA247 - Probability with Computer Applications</li>
              <li>CSC209 - Software Tools and Systems Programming</li>
              <li>CSC263 - Data Structures and Analysis</li>
              <li>CSC258 - Computer Organization</li>
              <li>MAT235 - Multivariable Calculus</li>
              <li>CSC309 - Programming on the Web</li>
              <li>CSC369 - Operating Systems</li>
              <li>CSC311 - Intro to Machine Learning</li>
              <li>CSC343 - Intro to Databases</li>
            </ul>
          </div>
          <div className="border-4 border-green rounded-2xl p-4 shadow-md">
            <p className="font-bold italic text-center">Electives:</p>
            <ul className="list-none font-semibold opacity-80 list-inside space-y-1">
              <li>
                MAT198 - Cryptology: The Mathematics of Secrecy and Security
              </li>
              <li>WGS160 - Intro to Women and Gender Studies</li>
              <li>LIN200 - Intro to Language</li>
              <li>PSY100 - Intro to Psychology</li>
              <li>ENG235 - The Graphic Novel</li>
              <li>SOC100 - Sociological Perspectives</li>
              <li>SOC150 - Sociological Inquiries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
