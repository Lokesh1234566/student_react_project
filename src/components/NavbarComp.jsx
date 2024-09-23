import React from "react";
import { Navbar } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const NavbarComp = ({ onToggle, isOpen }) => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Logo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle onClick={onToggle} />
      </div>
      <Navbar.Collapse className={`${isOpen ? "block" : "hidden"}`}>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
