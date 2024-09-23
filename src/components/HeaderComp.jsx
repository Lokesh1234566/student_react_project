import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import LogoImage from "../assets/bd886d7ccc6f8dd8db17e841233c9656.jpg";

// eslint-disable-next-line react/prop-types
const HeaderComp = ({ setTableVisible }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
    setTableVisible((prevState) => !prevState); // Toggle table visibility
  };

  return (
    <div className="h-[30vh] bg-gray-200">
      <div className="h-[20vh] flex flex-wrap justify-evenly mt-1">
        <div>
          <img
            src={LogoImage}
            alt=""
            className="rounded-lg w-20 h-20 md:w-28 md:h-28"
          />
        </div>
        <div className="flex flex-col">
          <p>College Name</p>
          <p>email</p>
          <p>Phone Number</p>
        </div>
        <div className="flex flex-col">
          <p>Address</p>
          <p>pincode</p>
        </div>
      </div>
      <div className="h-[10vh]">
        <NavbarComp onToggle={toggleNavbar} isOpen={isNavbarOpen} />
      </div>
    </div>
  );
};

export default HeaderComp;
