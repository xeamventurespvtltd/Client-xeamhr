import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = ({ title }) => {
  return (
    <>
      <section id="aboutus" className="about-section">
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
                <p>HR Software Company is an automated HR services management platform associated with India’s leading organizations as their most trusted partners for doing business.HR software is a digital solution provider that helps to manage employee’s administration.The Company was founded in 2019.
              </p>
                <p className="mb-3">  HR software makes it possible for the team members to manage leaves and travel expenses. With the help of HR software salary is directly credited to the employee’s bank account. The software helps to keep track of scheduled tasks and employee performance.
                In the competitive time, we want to give you the solution that will enable you to build up an amazing Employee Experience.</p>
                <NavLink to="#"><u>Read More</u> <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs