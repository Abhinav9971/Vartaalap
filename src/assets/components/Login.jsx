import React, { useEffect } from "react";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";

function Signup() {
  const [curr, setcurr] = useState("Signup");

  return (
    <>
      {/* <FaUser /> */}
      <div className="bac">
        <div className="flex justify-center h-screen items-center">
          <div className="w-1/2">
            {curr === "Login" ? (
              <img
                src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1723873572~exp=1723874172~hmac=928cfb4330c91ea472a42db9f27f90ecc67a3fe574aea32a7ad29842ce7ff48c"
                alt=""
                className="h-[500px]"
              />
            ) : (
              <img
                src="https://img.freepik.com/free-photo/bank-card-mobile-phone-online-payment_107791-16646.jpg?t=st=1723875836~exp=1723879436~hmac=1bd2b084516e37c06e33c05ed43be47415e43b4bd0c9f851bf2be7be4bffabd1&w=740"
                alt=""
                className="h-[500px]"
              />
            )}
          </div>
          <form className="flex justify-center gap-3 border  border-black rounded-lg flex-col max-w-fit text-black w-1/2 m-5 p-5">
            <h2 className="font-semibold text-2xl">{curr}</h2>
            {curr === "Signup" ? (
              <input
                className="outline-none input-user text-black p-2 border border-black  rounded-lg bg-transparent "
                type="text"
                placeholder="Username"
              />
            ) : null}
            <input
              className="outline-none text-black p-2 border border-black  rounded-lg bg-transparent "
              type="email"
              placeholder="Email address"
              required
            />
            <input
              className="outline-none text-black p-2 border border-black  rounded-lg bg-transparent"
              type="password"
              placeholder="password"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 p-3 rounded-xl text-white hover:bg-blue-600 hover:scale-[1.01]"
            >
              {curr === "Signup" ? "Create Account" : "Login!"}
            </button>
            {curr === "Login" ? (
              <button className="bg-blue-500 p-3 rounded-xl text-white hover:bg-blue-600 hover:scale-[1.01]">
                Forgot
              </button>
            ) : null}
            {curr === "Signup" ? (
              <h2 className="text-gray-400">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer  hover:text-blue-400"
                  onClick={() => setcurr("Login")}
                >
                  Click Here!
                </span>
              </h2>
            ) : (
              <h2>
                Create an Account{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setcurr("Signup")}
                >
                  Click Here!
                </span>
              </h2>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
