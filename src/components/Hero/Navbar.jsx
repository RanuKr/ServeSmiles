import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = ({ toggleSidebar }) => {  
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* Sidebar Toggle Button */}
        <button onClick={toggleSidebar} className="lg:hidden text-white mr-4">
          <HiMenuAlt1 size={28} />
        </button>

        {/* Logo (Now Clickable & Redirects to Home) */}
        <Link to="/" className="text-2xl flex items-center font-semibold">
          <BiHeart className="mr-2" />
          ServeSmiles
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {/* <NavLink to="/donate" text="Donate" /> */}
          <NavLink to="/events" text="Events" />
          <NavLink to="/contact" text="Contact Us" />
          <NavLink to="/faqs" text="FAQs" />
          <NavLink to="/Volunteers" text="Volunteers" />
          <NavLink to="/News" text="News" />
          <NavLink to="/signin" text="Sign In" />
          <NavLink to="/admin" text="Admin" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(false)} size={30} className="cursor-pointer" />
          ) : (
            <HiMenuAlt1 onClick={() => setToggle(true)} size={30} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="lg:hidden bg-gray-700 text-white py-4 px-6 space-y-3">
          {/* <NavLink to="/donate" text="Donate" /> */}
          <NavLink to="/events" text="Events" />
          <NavLink to="/contact" text="Contact Us" />
          <NavLink to="/faqs" text="FAQs" />
          <NavLink to="/signin" text="Sign In" />
          <NavLink to="/admin" text="Admin Panel" />
        </div>
      )}
    </>
  );
};

// Reusable NavLink component
const NavLink = ({ to, text }) => (
  <Link to={to} className="hover:bg-gray-600 px-4 py-2 rounded-md block text-lg">
    {text}
  </Link>
);

export default Navbar;
