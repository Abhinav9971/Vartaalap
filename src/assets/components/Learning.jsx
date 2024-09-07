// import React from "react";

import { Link } from "react-router-dom";
import Landing from "./Landing";

function Learning() {
  return (
    <>
      <div>
        
        <div className="flex justify-center flex-col gap-2 ">
          <a href="" className="bg-blue-400 hover:bg-blue-500 rounded-xl p-5">
            Alpabates(A-Z)
          </a>
          <a href="" className="bg-blue-400 hover:bg-blue-500 rounded-xl p-5">
            Numbers(1-9)
          </a>
          <a href="" className="bg-blue-400 hover:bg-blue-500 rounded-xl p-5">
            Gestures(👋👋✌️👌)
          </a>
          <a
            href=""
            className="bg-blue-400 hover:bg-blue-500 rounded-xl p-5 cursor-not-allowed  btn-disabled"
          >
            Coming soon...
          </a>
          <a
            href=""
            className="bg-blue-400 hover:bg-blue-500 rounded-xl p-5 cursor-not-allowed btn-disabled"
          >
            Coming soon...
          </a>
        </div>
      </div>
    </>
  );
}

export default Learning;
