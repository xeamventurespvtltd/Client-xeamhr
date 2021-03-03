import React from "react";
import Navbar from "../../components/Navbar";
import ContactSection from "./ContactSection"
import MapSection from "./MapSection";
import BigFooter from "../Footer/BigFooter";
import SmallFooter from "../Footer/SmallFooter";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Navbar
        header="headerBook"
      />
      <ContactSection />
      <BigFooter />
      <SmallFooter />
    </>
  )
}
export default ContactUs