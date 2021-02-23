import React from "react"
import contact_image from "../../assests/image/contact-image.jpg"
import con_icon from "../../assests/icon/con-icon.png"

const Address = () => {
  return (
    <section className="address-section">
      <div className="address-body" style={{ backgroundImage: `url(${contact_image})` }}>
        <div className="visit-head">
          <h2>VISIT US AT:</h2>
        </div>
        <div className="visit-list">
          <ul>
            <li>
              <div className="visit-icon" style={{ backgroundImage: `url(${con_icon})` }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="visit-text">
                <h4>XEAM Tower, E-202, Sector 74 A, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</h4>
              </div>
            </li>
            <li>
              <div className="visit-icon" style={{ backgroundImage: `url(${con_icon})` }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className="visit-text">
                <h4>Email</h4>
              </div>
            </li>
            <li>
              <div className="visit-icon" style={{ backgroundImage: `url(${con_icon})` }}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="visit-text">
                <h4>+91+9876543210</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="add-divider"></div>
        <div className="support-content">
          <h3>SUPPORT</h3>
          <p>Thank you for reaching out to us</p>
          <p>Have a question in your mind about HR software services?</p>
          <p>Feel free to call or e-mail HR Software or complete this brief form</p>
          <p>Our representative will contact with you shortly</p>
        </div>
      </div>
    </section>
  )
}

export default Address 