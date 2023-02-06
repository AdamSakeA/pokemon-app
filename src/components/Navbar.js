import { Link, NavLink } from 'react-router-dom';
import "../styles/Navbar.scss"

export default function Navbar() {

  const NavBar = () => {
    return (
      <nav className='navbar-right'>
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
      </nav>
    );
  };

  return (
    <div className="Navbar container">
      <Link className = "link-navbar" to="/">Pokemon</Link>
      <div className='navbar-right'>
        <NavBar />
      </div>
    </div>
  )
}