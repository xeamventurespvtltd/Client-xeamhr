import React from "react"
import Navbar from "../../components/Navbar"
import { NavLink } from "react-router-dom"
<<<<<<< HEAD:src/Pages/home/MainBanner.js
import useSticky from "../../components/UseSticky"
=======
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc:src/Pages/Home/MainBanner.js
const MainBanner = ({ heading, subHeading }) => {
  const { isSticky, element } = useSticky();
  console.log("mainBanner", element.current)
  return (
<<<<<<< HEAD:src/Pages/home/MainBanner.js
    <section id="home" className="main-banner">
      <Navbar
        header="headerHome"
        isSticky={isSticky}
=======
    <section className="main-banner">
      <Navbar
        header="headerHome"
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc:src/Pages/Home/MainBanner.js
      />
      <div className="container">
        <div className="banner-content">
          <div className="banner-body">
            <h1 className="mb-2">{heading}</h1>
            <h5 className="mb-4">{subHeading}</h5>
            <NavLink to="/book-a-demo" type="button">Book a Demo</NavLink>
          </div>
        </div>
<<<<<<< HEAD:src/Pages/home/MainBanner.js
        <div
          ref={element}
          className="down-arrow"
        >
=======
        <div className="down-arrow">
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc:src/Pages/Home/MainBanner.js
          <a href="#aboutus"><i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>

  )
}
export default MainBanner