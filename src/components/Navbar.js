import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = ({ header }) => {
  return (
    <div className={`${header}`}>
      <nav className="container navbar navbar-expand-lg navbar-light myNavbar">
        <NavLink
          exact className="navbar-brand" to="/">LOGO</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
          {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        <div className="menu-body collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">SERVICES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/feature">FEATURES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">REVIEWS</NavLink>
            </li>
          </ul>
        </div>
        <div className="demo-button">
          <NavLink to="/book-a-demo">BOOK A DEMO</NavLink>
        </div>
      </nav>
    </div>
  )
}
export default Navbar