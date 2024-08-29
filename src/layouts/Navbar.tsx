import { NavigationLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky bottom-0 bg-popover py-6 px-4">
      <ul className="nav-items">
        {NavigationLinks.map((link) => (
          <li className="nav-item">
            <NavLink
              to={link.href}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <link.icon />
              <span> {link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
