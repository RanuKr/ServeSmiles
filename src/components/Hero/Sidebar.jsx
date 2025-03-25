import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBars, FaUsers, FaHandsHelping, 
  FaDonate, FaChartBar, FaSignOutAlt 
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, icon: <FaUsers />, text: "User Management", path: "/user-management" },
    { id: 2, icon: <FaHandsHelping />, text: "NGO Management", path: "/ngo-management" },
    { id: 3, icon: <FaDonate />, text: "Donations", path: "/donations" },
    { id: 4, icon: <FaChartBar />, text: "Analytics", path: "/analytics" },
    { id: 5, icon: <FaSignOutAlt />, text: "Logout", path: "/logout", danger: true },
  ];

  const handleLogout = () => {
    // Clear user session or tokens
    localStorage.removeItem("token"); // Example
    navigate("/login"); // Redirect to login page
  };

  return (
    <motion.div 
      initial={{ width: "16rem" }} 
      animate={{ width: isOpen ? "16rem" : "4rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gray-800 text-white h-screen p-4 transition-all duration-300 flex flex-col"
    >
      {/* Toggle Button */}
      <button 
        className="text-white mb-4 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Navigation */}
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li 
            key={item.id} 
            className={`flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded transition-all ${item.danger ? "hover:bg-red-600" : ""}`}
            onClick={() => {
              if (item.path === "/logout") {
                handleLogout();
              } else {
                setActiveMenu(item.text);
                navigate(item.path);
              }
            }}
          >
            {item.icon}
            {isOpen ? (
              <span>{item.text}</span>
            ) : (
              <span className="tooltip">{item.text}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Tooltip Styling */}
      <style>
        {`
          .tooltip {
            position: absolute;
            left: 4.5rem;
            background-color: black;
            color: white;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            white-space: nowrap;
          }
          
          li:hover .tooltip {
            opacity: 1;
          }
        `}
      </style>
    </motion.div>
  );
};

export default Sidebar;