import React from "react";

const ReviewCard = ({ name, detail, quote, star }) => {
  return (
    <>
      <div className="item">
        <div className="review-box">
          <div className="review-content">
            <i className="fas fa-quote-left"></i>
            <blockquote>{quote}</blockquote>
            <i className="fas fa-quote-right"></i>
            <div className="star-list">
              <ul className="p-0">
                <li style={{ paddingLeft: "8px" }}>&#9733;</li>
                <li>&#9733;</li>
                <li>&#9733;</li>
                <li>&#9733;</li>
                <li style={{ color: "#f9f97180", paddingRight: "8px" }}>&#9733;</li>
              </ul>
            </div>
          </div>
          <div className="review-info">
            <div className="info-image">
              <i className="fas fa-user"></i>
            </div>
            <div className="info-name">
              <h4>{name}</h4>
              <p><i>{detail}</i></p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ReviewCard