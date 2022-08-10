import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.scss"

export default function Navbar() {
    const location = useLocation()
    const [url, setUrl] = useState(null)
    
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]); 

    const CustomLink = ({to, children, ...props}) => {
        return (
            <li>
                <Link className={url === to ? "link-navbar active" : "link-navbar"} to={to} {...props}>{children}</Link>
            </li>
        )
    }
  return (
    <div className='navbar-container'>
        <nav className="Navbar container">
            <Link className = "link-navbar" to="/">Pokemon</Link>
            <ul className='navbar-right'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/pokedex">PokeDex</CustomLink>
            </ul>
        </nav>
    </div>
  )
}