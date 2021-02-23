import React from "react"

const ScheduleBook = ({ heading, points }) => {
  const renderedList = points.map((list, ind) => {
    return (
      <li key={ind}><i className="far fa-handshake"></i> <h6>{list}</h6></li>
    )
  })
  return (
    <section className="schedule-book">
      <div className="container-fluid">
        <h1>{heading}</h1>
        <div className="automate">
          <span>Automate your HR Activities with the best Features of <b>XEAMHR</b></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="schedule-list">
<<<<<<< HEAD
                <h5>Book a demo on HR software platform – Solution for multi-dimensional HR challenges</h5>
=======
                <h5>Steps to properly schedule a Demo:</h5>
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
                <ul>
                  {renderedList}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default ScheduleBook