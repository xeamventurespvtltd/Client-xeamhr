import React from "react"

const BelowService = (props) => {
  return (

    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="service-image">
          <img src={props.Data.image} alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-body">
          <div className="atten-box mb-4">
            <h2>{props.Data.heading}</h2>
          </div>
        </div>
        <div className="service-list">
          <ul className="p-0">
            {
              Object.values(props.Data.content).map((item, ind) => {
                return (
                  <li key={ind}>
                    <i className="fas fa-circle"></i>
                    <h5>{item}</h5>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="service-btn mt-4">
          <a href="/">Book a Demo</a>
        </div>
      </div>
    </div>
  )
}

export default BelowService