import React from "react";
import NavBar from "../components/NavBar";
import { ReactComponent as MeStanding } from "../assets/MeStanding.svg";

function Construction() {
  return (
    <div className="bg-work min-h-screen bg-cover p-4 sm:p-12">
      <div className="m-auto max-w-screen-lg space-y-12">
        <NavBar colour="lightPurple" />
        <div className="container italic font-bold">
          <h1 className="leading-tight mb-4">
            This page is under construction!
          </h1>
          <p>It'll be up and running soon, I promise.</p>
          <MeStanding className="ml-auto max-h-96" />
        </div>
      </div>
    </div>
  );
}

export default Construction;
