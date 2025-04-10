import React from "react";
import { myData } from "../../components/data/allData";
import { NavLink } from "react-router-dom";
import { DarkModeToggle } from "../../components/ui/DarkModeToggle";

const Navigation = () => {
  return (
    <div className="flex justify-center fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="bg-backgroudAlt flex justify-center items-center gap-10 py-2 px-6 rounded-full shadow-lg backdrop-blur-md ">
        {myData.navItems.map((item) => (
          <li key={item.id} className="cursor-pointer font-semibold">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `group transition-colors ease-in-out duration-300 ${
                  isActive ? "text-teal-500" : "text-black hover:text-teal-500"
                }`
              }
            >
              <item.icon
                size={20}
                className="text-[var(--color-iconColor)] group-hover:text-teal-500 group-focus:text-teal-500 group-[.text-teal-500]:text-teal-500 transition-colors duration-300"
              />
            </NavLink>
          </li>
        ))}
        <DarkModeToggle />
      </ul>
    </div>
  );
};

export default Navigation;
