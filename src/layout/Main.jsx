import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element.classList]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
    </div>
  );
};

export default Main;
