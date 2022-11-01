import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="fixed-top top-0 m-10">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top w-100 bg-blue-500 text-white">
            <img src="#" alt="" />
          <div className="container">
            <Link className="navbar-brand text-white" to={"/"}>
              IQAC
            </Link>
          <div className="" id="navbarTogglerDemo02 ">
            {
              
            }
              <ul className="navbar-nav ml-auto text-white">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
      </nav>
      </div>
    );
}
    

export default Header;