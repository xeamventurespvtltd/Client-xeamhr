import React from "react";
import Calender from "../../components/Calender";
import TimeDuration from "./TimeDuration"

const DateForDemo = () => {
  return (
    <section className="date-time-section container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="cal-body">
              <div className="calender-box">
                <div className="cal-top">
                  <div className="cal-logo">LOGO</div>
                  <h6>Select Date for Demo</h6>
                </div>
                <Calender />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <TimeDuration />
        </div>
      </div>
    </section>
  )
}

export default DateForDemo