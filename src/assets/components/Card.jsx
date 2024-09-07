import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Navbar from "./Navbar";

function Card() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Content"); // replace '/new-route' with your target path
  };
  const handleClickk = () => {
    navigate("/Contentgesture"); // replace '/new-route' with your target path
  };

  return (
    <>
      <Navbar />
      {/* <Link to="/">Home</Link> */}
      <h1 className="block text-center text-2xl font-semibold mt-5 mb-5">
        Learning!
      </h1>
      <div className="flex gap-5 m-5  ">
        <div className="card card-compact bg-base-100 w-80 h-96 shadow-xl backdrop-blur-sm bg-white/5">
          <figure>
            <img
              src="https://imgs.search.brave.com/AGWOl4Vqzq5aBDQTKYEC4qTUeRmmrDiO0yZ1WXhT2K4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaGFuZC1nZXN0/dXJlLWxhbmd1YWdl/LWFscGhhYmV0XzIz/LTIxNDc4ODE5NzMu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
              alt="hand gesture"
            />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Alphabates</h2>
            <p>Learn Alphabates from A-Z</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary text-white"
                onClick={handleClick}
              >
                Start Learning!
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 h-96 shadow-xl backdrop-blur-sm bg-white/5">
          <figure>
            <img
              src="https://imgs.search.brave.com/z0wmTMhM5IqNVr3WfDvN0AoMzYtyJoJr_lDtAC7Zf3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80OC82MC9o/YW5kLWdlc3R1cmUt/bGVhcm4tY291bnRp/bmctZmluZ2Vycy1z/eW1ib2wtdmVjdG9y/LTQxNjE0ODYwLmpw/Zw"
              alt="Numbers"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Numbers</h2>
            <p>Learn Numbers from 1-10</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary  text-white">
                Start Learning!
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 h-96 shadow-xl backdrop-blur-sm bg-white/5">
          <figure>
            <img
              src="https://imgs.search.brave.com/HXQHsNvm-_e6-lrC7CJOtHL3dtLH-KIVVg5xHR3quaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hLnN0/b3J5Ymxvay5jb20v/Zi8yMzYxODAvOTEy/NzU0MTJjOS9lbl8y/MDE5XzA0X24xLTU4/NXgxMDI0LnBuZw"
              alt="Numbers"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gestures</h2>
            <p>Learn Gestures(👌✌️👋)</p>
            <div className="card-actions justify-end ">
              <button
                className="btn btn-primary  text-white"
                onClick={handleClickk}
              >
                Start Learning!
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 h-96 shadow-xl backdrop-blur-sm bg-white/5">
          <figure className="h-80">
            <img src="#" alt="Coming Soon.." />
          </figure>
          <div className="card-body backdrop-blur-sm bg-white/5">
            <h2 className="card-title">Coming soon...</h2>
            <p>...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary  text-white">
                Start Learning!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
