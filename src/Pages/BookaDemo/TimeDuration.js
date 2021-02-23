import React from "react";
import VerticalCarousel from "../../components/VerticalCarosuel";
import { time } from "../Data"
<<<<<<< HEAD
import useForm from "../../components/useForm"
import validate from "../../components/validateInfo"

const TimeDuration = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(submitForm, validate);
  const { firstName, lastName, email, companyName, phoneNumber } = errors;
  return (
    <section className="time-duration-section">
      <div className="error-text">
        {((firstName || lastName || email || companyName || phoneNumber) && isSubmitting ? <small className="error-text">All fields in red are mandatory* </small> : null)}
      </div>
      <h2>User Info:</h2>
      <form className="g-3"
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-body">
              <label forhtml="exampleFormControlInput1" className="form-label"> Enter First Name{(firstName && isSubmitting) ? <span>*</span> : null}</label>
              <div className="form-box" style={(firstName && isSubmitting) ? { border: "1px solid red" } : null}>
                <div className="form-validation">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <input type="text" name="firstName" className="form-control" placeholder="First name" aria-label="First name"
                  value={values.firstName}
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-body">
              <label forhtml="exampleFormControlInput1" className="form-label">Enter Last Name {(lastName && isSubmitting) ? <span>*</span> : null}</label>
              <div className="form-box" style={(lastName && isSubmitting) ? { border: "1px solid red" } : null}>

                <input type="text" className="form-control" name="lastName" placeholder="Last name" aria-label="Last name"
                  value={values.lastName}
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-body">
              <label forhtml="exampleFormControlInput1" className="form-label">Enter Email{(email && isSubmitting) ? <span>*</span> : null}</label>
              <div className="form-box" style={(email && isSubmitting) ? { border: "1px solid red" } : null}>

                <input type="email" className="form-control" name="email" id="inputEmail4" placeholder="Email"
                  value={values.email}
                  onChange={(e) => {
                    // e.preventDefault()
                    handleChange(e.target.value, e.target.name)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-body">
              <label forhtml="exampleFormControlInput1" className="form-label">Enter Company Name{(companyName && isSubmitting) ? <span>*</span> : null}</label>
              <div className="form-box" style={(companyName && isSubmitting) ? { border: "1px solid red" } : null}>
                <input type="text" className="form-control" name="companyName" placeholder="Company Name" aria-label="First name"
                  value={values.companyName}
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-body">
              <label forhtml="exampleFormControlInput1" className="form-label">Enter Phone Number{(phoneNumber && isSubmitting) ? <span>*</span> : null}</label>
              <div className="form-box" style={(phoneNumber && isSubmitting) ? { border: "1px solid red" } : null}>
                <input type="text" className="form-control" name="phoneNumber" pattern="[0-9]" placeholder="Phone Number" aria-label="First name"
                  value={values.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '')
                    handleChange(value, e.target.name);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-body">
                <label forhtml="exampleFormControlInput1" className="form-label">MEETING DURATION</label>
                <div className="form-box">
                  <fieldset disabled>
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="30 Minutes" />
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-body">
                <label forhtml="exampleFormControlInput1" className="form-label">WHAT TIME WORKS BEST?</label>
                <div className="form-box">
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue>UTC +05:30 New Delhi, Mumbai, and Calcutta</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <VerticalCarousel
            data={time}
          />
        </div>
        <div className="time-submit">
          <button type="button"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </form >
=======

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
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
    </section >
  )
}

export default TimeDuration