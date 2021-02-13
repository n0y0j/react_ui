import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [Click, setClick] = useState(false);

  const handleClick = () => setClick(!Click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" classNmae="navbar-logo">
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={Click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    Sign Up
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
