import React, { useState } from "react";
import Calender from "../../components/Calender";
import TimeDuration from "./TimeDuration"

const DateForDemo = ({ screenLoader }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timing, setTime] = useState("")
  const submitForm = () => {
    setIsSubmitted(true)
  }

  const calenderTime = (value) => {
    setTime(value)
  }

  return (
    <section className="date-time-section container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="cal-body">
            <div className="calender-box">
              <div className="cal-top">
                <div className="cal-logo">LOGO</div>
                <h6>Select Date for Demo</h6>
              </div>
              <Calender
                calenderTime={calenderTime}
              />
            </div>
          </div>
        </div>

        <div className="col-md-8 g-0">
          {
            (isSubmitted) ? <h1>form submitted</h1> : <TimeDuration
              submitForm={submitForm}
              screenLoader={screenLoader}
              timing={timing}
            />
          }
        </div>
      </div>
    </section>
  )
}

export default DateForDemo