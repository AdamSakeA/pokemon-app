import { Link, NavLink } from "react-router-dom";
import {
  NavMobile,
  NavContainer,
  NavContents,
  IconClose,
  IconOpen,
  NavDesktop,
  NavContentsMobile,
} from "./navbar.styles";
import { useState } from "react";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <NavContainer>
      <Link className="link-navbar" to="/">
        Pokemon
      </Link>
      <NavbarMobile isToggle={isToggle} setIsToggle={setIsToggle} />
      <NavbarDesktop />
    </NavContainer>
  );
}

const NavbarDesktop = () => {
  return (
    <NavDesktop>
      <NavContents>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active link" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/pokedex"
          className={({ isActive }) => (isActive ? "link-active link" : "link")}
        >
          Pokedex
        </NavLink>
      </NavContents>
    </NavDesktop>
  );
};

const NavbarMobile = ({ isToggle, setIsToggle }) => {
  return (
    <NavMobile>
      {isToggle ? (
        <IconOpen onClick={() => setIsToggle((prevToggle) => !prevToggle)} />
      ) : (
        <IconClose onClick={() => setIsToggle((prevToggle) => !prevToggle)} />
      )}
      {isToggle && (
        <NavContentsMobile>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link-active link" : "link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              isActive ? "link-active link" : "link"
            }
          >
            Pokedex
          </NavLink>
        </NavContentsMobile>
      )}
    </NavMobile>
  );
};
