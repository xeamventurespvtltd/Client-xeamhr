<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
import Calender from "../../components/Calender";
import TimeDuration from "./TimeDuration"

const DateForDemo = () => {
<<<<<<< HEAD
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submitForm = () => {
    console.log("submitted", isSubmitted)
    setIsSubmitted(true)
  }
  return (
    <section className="date-time-section container-fluid p-0">
      <div className="row">
        <div className="col-md-4">
=======
  return (
    <section className="date-time-section container-fluid">
      <div className="row">
        <div className="col-md-6">
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
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

<<<<<<< HEAD
        <div className="col-md-8">
          {(isSubmitted) ? <h1>form submitted</h1> : <TimeDuration
            submitForm={submitForm}
          />}
=======
        <div className="col-md-6">
          <TimeDuration />
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
        </div>
      </div>
    </section>
  )
}

export default DateForDemo