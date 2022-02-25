import React from "react";

const FeatureCard = ({ icon, title, para }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="feature-box">
        <img src={icon} alt="icon" />
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </div>
  )
}
export default FeatureCard