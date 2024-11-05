import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-amber-950 py-5 text-center">
        <ul className="flex justify-center gap-4">
          <li className="cursor-pointer duration-500">
            <NavLink
              to=""
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-orange-400 text-black py-1 px-3 font-bold text-sm"
                    : "text-white font-bold text-sm py-1 px-3"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer duration-500">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-orange-400 text-black py-1 px-3 font-bold text-sm"
                    : "text-white font-bold text-sm py-1 px-3"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="cursor-pointer duration-500">
            <NavLink
              to="gallary"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-orange-400 text-black py-1 px-3 font-bold text-sm"
                    : "text-white font-bold text-sm py-1 px-3"
                }`
              }
            >
              Gallary
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
