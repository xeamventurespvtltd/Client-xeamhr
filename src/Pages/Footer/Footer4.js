import React, { useState } from "react";
import axios from "axios";
let formData = {};

const Footer4 = ({ title, para }) => {
  const [response, setResponse] = useState(null)
  const [loader, setLoader] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    const data = new FormData(e.target);
    for (let key of data.keys()) {
      formData[key] = data.get(key)
    }

    const toUser = {
      subject: 'Mail Test',
      content: '<html><body>Hello we are from xeam ventures, <br> Thank your for subscribing our newsletter</body><br></html>'
    }
    const newData = Object.assign({ ...formData }, toUser)
    console.log("formData", newData)
    axios({
      method: "post",
      url: "/api/subscribe",
      data: newData
    }).then(response => {
      setResponse(response.data)
    })
      .catch(err => console.log("error in submitting the form", err))
  }

  const emailHandle = () => {
    if (!loader) {
      return (
        <form className="row g-3" onSubmit={handleSubmit} method="post">
          <div className="col-auto">
            <input type="email" name="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">SUBSCRIBE</button>
          </div>
        </form>
      )
    }
    else {
      return (
        (!response) ?
          <div className="d-flex justify-content-center text-white">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div className="subs-email">Thank You For Subscribing, <br /> Please check your mail..</div>
      )
    }
  }

  return (
    <div className="footer-contact">
      <h6>{title}</h6>
      <p>{para}</p>
      {emailHandle()}
    </div>
  )
}

export default Footer4 