import React from "react";
import ContactForm from "./ContactForm"
import Address from "./Address"

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-text">
        <h1>Contact Us</h1>
      </div>
      <div className="container-fluid contact-section-body py-4">
        <div className="row">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-6">
            <Address />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection