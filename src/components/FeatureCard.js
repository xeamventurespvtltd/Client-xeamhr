import React from "react";

const FeatureCard = ({ title, para, ind }) => {
  console.log(ind)
  return (
    <div key={ind} className="col-md-4 col-sm-6 mb-4">
      <div className="feature-box">
        <i className="fas fa-cogs"></i>
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </div>
  )
}
export default FeatureCard