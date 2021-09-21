import React from "react";
import NavBar from "../components/NavBar";

function Courses() {
  return (
    <div className="bg-courses min-h-screen bg-cover p-4 sm:p-12">
      <div className="space-y-12">
        <NavBar colour="green" />
        <h1 className="container italic font-bold">
          These are some courses I’ve taken or am in the middle of taking:
        </h1>
        <div className="container grid grid-cols-2 gap-4">
          <div className="border-4 border-green rounded-2xl p-4 shadow-md">
            <p className="font-bold italic text-center">
              Program Requirements:
            </p>
            <ul className="list-none font-semibold list-inside">
              <li>CSC108 - </li>
              <li>CSC148 -</li>
              <li>CSC165 -</li>
              <li>MAT137 - </li>
              <li>MAT 223 -</li>
              <li>CSC207 - </li>
              <li>CSC236 - </li>
              <li>STA247 - </li>
              <li>CSC209 - </li>
              <li>CSC263 - </li>
              <li>CSC258 - </li>
              <li>MAT235 - </li>
              <li>CSC309 - </li>
              <li>CSC369 - </li>
              <li>CSC311 - </li>
              <li>CSC343 - </li>
            </ul>
          </div>
          <div className="border-4 border-green rounded-2xl p-4 shadow-md">
            <p className="font-bold italic text-center">Electives:</p>
            <ul className="list-none font-semibold list-inside">
              <li>CSC108 - </li>
              <li>CSC108 - </li>
              <li>CSC108 - </li>
              <li>CSC108 - </li>
              <li>CSC108 - </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
