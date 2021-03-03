import React, { useState } from "react";
import Calender from "../../components/Calender";
import TimeDuration from "./TimeDuration"

const DateForDemo = ({ screenLoader }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submitForm = () => {
    console.log("submitted", isSubmitted)
    setIsSubmitted(true)
  }
  return (
    <section className="date-time-section container-fluid p-0">
      <div className="row">
        <div className="col-md-4">
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

        <div className="col-md-8">
          {(isSubmitted) ? <h1>form submitted</h1> : <TimeDuration
            submitForm={submitForm}
            screenLoader={screenLoader}
          />}
        </div>
      </div>
    </section>
  )
}

export default DateForDemo