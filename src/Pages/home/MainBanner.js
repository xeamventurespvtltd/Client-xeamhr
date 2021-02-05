import React from "react"
import Navbar from "../../components/Navbar"
const MainBanner = ({ heading, subHeading }) => {
  return (
    <section className="main-banner">
      <Navbar />
      <div className="container">
        <div className="banner-content">
          <div className="banner-body">
            <h1 className="mb-2">{heading}</h1>
            <h5 className="mb-4">{subHeading}</h5>
            <a href="/" type="button">Book a Demo</a>
          </div>
        </div>
        <div className="down-arrow">
          <a href="/"><i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  )
}
export default MainBanner