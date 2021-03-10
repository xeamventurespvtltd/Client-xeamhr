import React, { useState, useEffect } from "react";
import validation from "./validation";
import axios from "axios";

const ContactForm = () => {
  // values of forms
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: ""
  })
  // containing errors from form field
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState(null)
  const [loader, setLoader] = useState(false)
  // handling the data from submitting form

  const formValid = (errors) => {
    let valid = true
    Object.values(errors).forEach((item) => {
      if (item.length > 0) {
        return valid = false
      }
    });
    return valid
  }

  const handleSubmit = e => {
    const formData = {}
    e.preventDefault();
    if (formValid(errors)) {
      setLoader(true)
      const data = new FormData(e.target);
      for (let key of data.keys()) {
        formData[key] = data.get(key)
      }
      const toUser = {
        subject: 'Mail Test user contact',
        content: '<html><body>Hello we are from xeam ventures, <br> Thank your for subscribing our newsletter</body><br></html>'
      }
      const toUs = {
        subject: "mail test us contract",
        content: `<html><body>
        <p>${formData.first_name} ${formData.last_name}</p>
        <p>${formData.email}</p>
        <p>${formData.company_name}</p>
        </body><br></html>`
      }
      // const newData = Object.assign({ ...formData }, toUser)
      axios({
        method: "post",
        url: "/api/contact-us",
        data: {
          email: formData.email,
          toUser,
          toUs
        }
      }).then(response => {
        setResponse(response.data)
      })
        .catch(err => console.log("error in submitting the form", err))
    } else {
      console.error("display error")
    }
    setIsSubmitting(true)
  }

  const handleInput = e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleClassname = (keyName) => {
    if (isSubmitting) {
      return (keyName) ? "conForm-input error" : "conForm-input success"
    } else {
      return "conForm-input"
    }
  }

  useEffect(() => {
    setErrors(validation(values))
  }, [values])

  return (
    <div className="conForm-body">

      <form className="g-5" onSubmit={handleSubmit}>
        <div className="conForm-box mb-3">
          <label htmlFor="inputFirstname" className="form-label">FIRST NAME*</label>
          <div className={handleClassname(errors.first_name)}>
            <input type="text" className="form-control" name="first_name" placeholder="First Name" aria-label="First name"
              onChange={handleInput}
            />
            <i className="far fa-circle"></i>
            <i className="far fa-times-circle"></i>
            <i className="far fa-check-circle"></i>
          </div>
          <small>{errors.first_name}</small>
        </div>

        <div className="conForm-box mb-3">
          <label htmlFor="inputLastname" className="form-label">LAST NAME*</label>
          <div className={handleClassname(errors.last_name)}>
            <input type="text" className="form-control" name="last_name" placeholder="Last Name" aria-label="First name"
              onChange={handleInput}
            />
            <i className="far fa-circle"></i>
            <i className="far fa-times-circle"></i>
            <i className="far fa-check-circle"></i>
          </div>
          <small>{errors.last_name}</small>
        </div>

        <div className="conForm-box mb-3">
          <label htmlFor="inputEmail4" className="form-label">EMAIL*</label>
          <div className={handleClassname(errors.email)}>
            <input type="email" className="form-control" name="email" placeholder="Email"
              onChange={handleInput}
            />
            <i className="far fa-circle"></i>
            <i className="far fa-times-circle"></i>
            <i className="far fa-check-circle"></i>
          </div>
          <small>{errors.email}</small>
        </div>

        <div className="conForm-box mb-3">
          <label htmlFor="inputLastname" className="form-label">COMPANY NAME*</label>
          <div className={handleClassname(errors.company_name)}>
            <input type="text" className="form-control" name="company_name" placeholder="Your Company Name"
              onChange={handleInput}
            />
            <i className="far fa-circle"></i>
            <i className="far fa-times-circle"></i>
            <i className="far fa-check-circle"></i>
          </div>
          <small>{errors.company_name}</small>
        </div>

        <div className="conForm-box mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">COMMENT</label>
          <div className="conForm-comment">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Comment"></textarea>
          </div>
        </div>

        {(!response && loader) ?
          <div className="conForm-button">
            <button type="submit">
              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
              Submit
            </button>
          </div>
          :
          <div className="conForm-button">
            <button type="submit">Submit</button>
          </div>
        }
      </form>
      {(response && formValid(errors)) ? <div className="form-submit">
        <h4>Form Submitted!!</h4>
      </div> : null}
    </div>
  )
}

export default ContactForm