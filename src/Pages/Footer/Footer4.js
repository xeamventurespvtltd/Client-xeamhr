import React from "react"
const Footer4 = ({ title, para }) => {
  return (
    <>
      <div className="footer-contact">
        <h6>{title}</h6>
        <p>{para}</p>
        <form className="row g-3">
          <div className="col-auto">
            <input type="email" className="form-control" id="inputPassword2" placeholder="Email Address" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Footer4