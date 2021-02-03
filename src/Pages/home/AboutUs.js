import React from "react";
import { NavLink } from "react-router-dom"

const AboutUs = ({ title, content1, content2 }) => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              <div className="about-img">
                <img src="/assets/Images/imgpsh_fullsize_anim.png" alt="about_image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <h2>{title}</h2>
                <p>{content1}</p>
                <p className="mb-3">{content2}</p>
                <NavLink to="#"><u>Read More</u><i className="bi bi-chevron-right"></i><i className="bi bi-chevron-right"></i></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs