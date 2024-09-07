// import React from "react";
// import { MdVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { IoMdVideocam } from "react-icons/io";

// import Learning from "./Learning";
import "./Landing.css";
function Landing() {
  return (
    <>
      <main className="t-5">
        <div className="flex justify-center rounded-3xl ml-10 mr-10 pt-5  pb-4 mb-5 border border-black">
          <div className="w-1/2  p-5">
            <Navbar />

            <div className="">
              <img
                src="./src/assets/pic.png"
                alt=""
                className="h-[350px] block m-auto"
              />
            </div>
            <div className="text-4xl font-semibold mt-6 text-center ">
              Video calls and meetings for everyone
            </div>
            <div className="text-gray-500 text-center text-xl">
              Transforming hand gestures into meaningful communication.
            </div>
            <div className="pt-10 block ml-16 ">
              <Link
                to="/Video"
                className="bg-custom-gradient pl-6 pr-6 pt-3 pb-3 rounded rounded-xl hover:bg-custom-gradient-reverse m-10 text-lg "
              >
                Video
              </Link>

              <Link
                to="/Learning"
                className=" bg-custom-gradient pl-6 pr-6 pt-3 pb-3 rounded rounded-2xl  m-10 text-lg hover:bg-custom-gradient-reverse"
              >
                Learning
              </Link>
              <Link
                to="/Practice"
                className=" bg-custom-gradient pl-6 pr-6 pt-3 pb-3 rounded rounded-2xl  m-10 text-lg  hover:bg-custom-gradient-reverse"
              >
                Practice
              </Link>
            </div>
          </div>
          {/* <div className="w-1/2  flex justify-center flex-col">
            <div className="h-1/2 "></div>
            <div className="m-auto">
            
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Landing;
