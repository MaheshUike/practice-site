import React from "react";
import Logo from "./../assets/logo.png";
import "./component.module.scss";

const Header = () => {
  return (
    <div className="container border w-full ">
      <nav className="  flex   justify-around px-8 py-6  place-items-center">
        <div>
          <img className="rounded w-8  " src={Logo} alt="logo" />
        </div>
        <div>
          <ul
            className=" flex flex-auto  bg-gray-400  rounded-full  px-8 font-normal "
            id="list"
          >
            <li className=" list-none inline-block px-5">Intro</li>
            <li className="list-none  inline-block px-5">Pricing</li>
            <li className="list-none inline-block px-5">Features</li>
            <li className=" list-none inline-block px-5"> Testimonials</li>
          </ul>
        </div>

        <button className="bg-black rounded-3xl py-2 px-6 font-medium text-white  mr-4 hover:bg-gray-400 hover:text-white">Join Community</button>
      </nav>
    </div>
  );
};

export default Header;
