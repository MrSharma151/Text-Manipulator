import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Navbar = ({title, link, theme, toggleTheme}) => {
 
  return (
        <nav className ="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={theme}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Text Manipulator</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{link}</Link>
        </li>
      </ul>
    </div>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleTheme}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: theme === 'light' ? 'black' : 'white'}}>{theme === 'light' ? "Enable Dark Mode" : "Enable Light Mode"}
</label>
    </div>
  </div>
</nav>
  )
}

// Navbar.propTypes={
//     title : propTypes.string.isRequired,
//     link : propTypes.string.isRequired
// };

// Navbar.defaultProps={
//     title : "HOME",
//     link : "ABOUT US"
// };

export default Navbar;
