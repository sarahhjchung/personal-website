import React from "react";
import { ReactComponent as Up } from "../assets/Up.svg";

export default function GoUp({ colour }) {
  return (
    <div
      className={`flex items-center h-12 w-10 fixed bottom-50 right-0 rounded-l-xl bg-black`}
    >
      <Up className="fill-white p-1" />
    </div>
  );
}
