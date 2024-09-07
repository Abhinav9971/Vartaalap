import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 pl-10 pr-10  backdrop-blur-md bg-white/30">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              ></div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              VarTaalaap
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/Video">Video con..</Link>
              </li>

              <li>
                <Link to="/Learning">Learning</Link>
              </li>
              <li>
                <Link to="/Practice">Practice</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/Login"
              className="btn bg-custom-gradient px-10 hover:bg-custom-gradient-reverse"
            >
              Login!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
