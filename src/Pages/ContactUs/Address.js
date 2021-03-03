import React from "react";
import contact_image from "../../assests/image/contact-image.jpg";
import con_icon from "../../assests/icon/con-icon.png";
import MapSection from "./MapSection"

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
                <h4>xeam@xeamventures.com</h4>
              </div>
            </li>
            <li>
              <div className="visit-icon" style={{ backgroundImage: `url(${con_icon})` }}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="visit-text">
                <h4>+91-9856836002</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="add-divider"></div>
        <div className="support-content">
          <MapSection />
        </div>
      </div>
    </section>
  )
}

export default Address 