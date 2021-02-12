import React from "react";
import VerticalCarousel from "../../components/VerticalCarosuel";
import { time } from "../Data"

const TimeDuration = () => {
  return (
    <section className="time-duration-section">
      <div className="mb-3">
        <label forhtml="exampleFormControlInput1" className="form-label">MEETING DURATION</label>
        <fieldset disabled>
          <input type="text" id="disabledTextInput" className="form-control" placeholder="30 Minutes" />
        </fieldset>
      </div>
      <div className="mb-3">
        <label forhtml="exampleFormControlInput1" className="form-label">WHAT TIME WORKS BEST?</label>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>UTC +05:30 New Delhi, Mumbai, and Calcutta</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <VerticalCarousel
        data={time}
      />
      <div className="time-submit">
        <a href="/" type="button">Submit</a>
      </div>
    </section >
  )
}

export default TimeDuration