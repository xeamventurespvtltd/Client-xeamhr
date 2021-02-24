import React, { useRef } from "react"
import { NavLink } from "react-router-dom"

const Navbar = ({ header, isSticky }) => {
  let NavBar = useRef()
  const handleClick = (e) => {
    if (header === "headerHome") {
      let item = e.currentTarget;
      item.closest(".menu-body").classList.remove("show");
      e.preventDefault();
      // navigate to specific path
      const id = item.getAttribute("href").slice(1)
      const section = document.getElementById(id)
      let position = section.offsetTop;
      let NavBarHeight = NavBar.current.offsetHeight
      window.scrollTo({
        left: 0,
        top: (position - NavBarHeight)
      })
    }
  }
  return (
    <div ref={NavBar} className={isSticky ? `${header} navbar-sticky` : `${header}`}>
      <nav className="container navbar navbar-expand-lg navbar-light myNavbar">
        <NavLink
          exact className="navbar-brand" to="/">LOGO</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="menu-body collapse navbar-collapse" id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li id="navLink"
              className="nav-item"
            >
              {(header === "headerHome") ? <a href="#home" activeclassname="menu_active" className="nav-link active" aria-current="page"
                onClick={handleClick}
              >HOME</a> : <NavLink to="/" exact activeclassname="menu_active" className="nav-link active" aria-current="page"
                onClick={handleClick}>HOME</NavLink>
              }
              {/* <a href="#home" activeclassname="menu_active" className="nav-link active" aria-current="page"
                onClick={handleClick}
              >HOME</a> */}
            </li>
            <li id="navLink"
              className="nav-item"

            >
              <a href="#aboutus" activeclassname="menu_active" className="nav-link" aria-current="page"
                onClick={handleClick}
              >ABOUT US</a>
            </li>
            <li id="navLink"
              className="nav-item"
            >
              <a href="#services" className="nav-link"
                onClick={handleClick}
              >SERVICES</a>
            </li>
            <li id="navLink"
              className="nav-item"
            >
              <a href="#feature" className="nav-link"
                onClick={handleClick}
              >FEATURES</a>
            </li>
            <li id="navLink"
              className="nav-item"
            >
              <a href="#review" className="nav-link"
                onClick={handleClick}
              >REVIEWS</a>
            </li>
            <li id="navLink" className="nav-item">
              <NavLink to="/contact-us" className="nav-link">CONTACT US</NavLink>
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