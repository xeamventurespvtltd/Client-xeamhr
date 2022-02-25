import React from "react";
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"
import Footer4 from "./Footer4"

const Footer = ({ logo }) => {
  return (
    <>
      <footer className="footer1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="footer-title">
                <h2>{logo}</h2>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6 mb-3">
                  <Footer1 title="Contact Us" />
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <Footer2 title="Pages" />
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <Footer3 title="Our Services" />
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <Footer4 title="Subscribe to XEAMHR via Email"
                    para="Get the most recent updates from
                        our site and be updated your self"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer