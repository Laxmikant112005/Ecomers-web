import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import '../styles/Nev.css';

const Navbar = ({ login, setLogin }) => {

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* ================= LOGO ================= */}

      <Link to="/" className="navbar-logo">
        ECART
      </Link>


      {/* ================= NAVIGATION LINKS ================= */}

      <ul className="navbar-links">

        <li>
          <NavLink to="/" className="nav-link">
            <p>Home</p>
            <hr />
          </NavLink>
        </li>

        <li>
          <NavLink to="/collection" className="nav-link">
            <p>Collection</p>
            <hr />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            <p>About</p>
            <hr />
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link">
            <p>Contact</p>
            <hr />
          </NavLink>
        </li>

      </ul>


      {/* ================= RIGHT SIDE ================= */}

      <div className="navbar-actions">

        {/* ================= LOGIN ================= */}

        {!login && (
          <Link
            to="/login"
            className="nav-link"
          >
            Login
          </Link>
        )}


        {/* ================= SEARCH ================= */}

        <button
          className="nav-icon-button"
          type="button"
          aria-label="Search"
        >
          <img
            src={assets.Sicon}
            alt="Search"
          />
        </button>


        {/* ================= PROFILE ================= */}

        {login && (
          <div className="profile-container">

            <button
              className="nav-icon-button profile-button"
              type="button"
              aria-label="Profile"
            >
              <img
                src={assets.Cicon}
                alt="Profile"
              />
            </button>

            <div className="profile-dropdown">

              <Link to="/profile">
                Profile
              </Link>

              <Link to="/orders">
                Orders
              </Link>

              <button
                type="button"
                onClick={() => {
                  setLogin(false);
                  navigate('/');
                }}
              >
                Logout
              </button>

            </div>

          </div>
        )}


        {/* ================= CART ================= */}

        <Link
          to="/cart"
          className="cart-container"
          aria-label="Shopping Cart"
        >
          <img
            src={assets.Cart_icon}
            alt="Cart"
          />

          <span className="cart-count">
            0
          </span>
        </Link>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          className="cart-container menu-button"
          onClick={() => setVisible(true)}
          aria-label="Open menu"
        >
          <img
            src={assets.Micon}
            alt="Menu"
          />
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          visible ? 'mobile-menu-visible' : ''
        }`}
      >

        <div className="mobile-menu-content">

          {/* Back */}

          <div
            onClick={() => setVisible(false)}
            className="mobile-back"
          >
            <img
              src={assets.Bicon}
              alt="Back"
            />

            <p>Back</p>
          </div>


          {/* Mobile Links */}

          <NavLink
            onClick={() => setVisible(false)}
            className="mobile-nav-link"
            to="/"
          >
            Home
          </NavLink>


          <NavLink
            onClick={() => setVisible(false)}
            className="mobile-nav-link"
            to="/collection"
          >
            Collection
          </NavLink>


          <NavLink
            onClick={() => setVisible(false)}
            className="mobile-nav-link"
            to="/about"
          >
            About
          </NavLink>


          <NavLink
            onClick={() => setVisible(false)}
            className="mobile-nav-link"
            to="/contact"
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;