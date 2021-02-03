import React from "react"
const Footer4 = ({ title, para }) => {
  return (
    <>
      <div class="footer-contact">
        <h6>{title}</h6>
        <p>{para}</p>
        <form class="row g-3">
          <div class="col-auto">
            <input type="email" class="form-control" id="inputPassword2" placeholder="Email Address" />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Footer4