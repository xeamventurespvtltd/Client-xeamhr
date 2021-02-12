import React from "react"
import Navbar from "../../components/Navbar"
import { NavLink } from "react-router-dom"
const MainBanner = ({ heading, subHeading }) => {
  return (
    <section className="main-banner">
      <Navbar
        header="headerHome"
      />
      <div className="container">
        <div className="banner-content">
          <div className="banner-body">
            <h1 className="mb-2">{heading}</h1>
            <h5 className="mb-4">{subHeading}</h5>
            <NavLink to="/book-a-demo" type="button">Book a Demo</NavLink>
          </div>
        </div>
        <div className="down-arrow">
          <a href="#aboutus"><i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  )
}
export default MainBanner