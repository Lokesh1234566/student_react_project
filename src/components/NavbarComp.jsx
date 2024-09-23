import React from "react";
import { Navbar } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const NavbarComp = ({ onToggle, isOpen }) => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold ">
          Logo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle onClick={onToggle} />
      </div>
      <Navbar.Collapse className={`${isOpen ? "block" : "hidden"} md:block`}>
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/signup">Signup</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
