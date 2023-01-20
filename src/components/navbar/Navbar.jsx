/** @format */

import searchicon from "../../assets/SearchIcon.png";
import hamburger from "../../assets/Hamburger.png";
import logo from "../../assets/CryptoTrackerLogo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='nav'>
        <div className='nav-image'>
          <span className='hamburger-mobile-view'>
            <img src={hamburger} alt='hamburger' />
          </span>
          <img src={logo} alt='cryptotracker-logo' />
        </div>
        <ul className='nav-list'>
          <li>
            <img src={searchicon} alt='search-icon' />
          </li>
          <li>
            <img src={hamburger} alt='hamburger' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
