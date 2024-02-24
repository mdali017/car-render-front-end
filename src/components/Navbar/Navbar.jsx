import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Navbar = ({ theme, setTheme }) => {
  const NavLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Cars",
      link: "/#cars",
    },
    {
      id: 1,
      name: "About",
      link: "/#about",
    },
    {
      id: 1,
      name: "Booking",
      link: "/#bookings",
    },
  ];
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-500">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Render</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 ">
              {NavLinks.map((item) => (
                <li key={item.id} className="py-4">
                  <NavLink
                    to={item.link}
                    className=" uppercase hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                    href="#"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <DarkModeIcon
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <ModeNightIcon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
