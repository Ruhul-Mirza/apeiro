import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdowns = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseLeave = () => {
    setTimeout(() => setIsOpen(false), 200);
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  return (
    <div
      className="relative inline-block"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={dropdownRef}
    >
      <button
        // onClick={toggleDropdown}
        className="cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm flex items-center"
      >
        {title}
        <svg
          className="ml-2 -mr-1 h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
          <li className="py-1" role="none">
            {items.map((item) => (
              <NavLink
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdowns;
