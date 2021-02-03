import React from "react";
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"
import Footer4 from "./Footer4"

const Footer = ({ logo }) => {
  return (
    <>
      <footer class="footer1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10 mx-auto">
              <div class="footer-title">
                <h2>{logo}</h2>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-6 mb-3">
                  <Footer1 title="Contact Us" />
                </div>
                <div class="col-md-3 col-sm-6 mb-3">
                  <Footer2 title="Pages" />
                </div>
                <div class="col-md-3 col-sm-6 mb-3">
                  <Footer3 title="Our Services" />
                </div>
                <div class="col-md-3 col-sm-6 mb-3">
                  <Footer4 title="Subscribe to XEAMHR via Email"
                    para="Excepteur sint occaecat cupidata njo prodiiont, sunt in cupta qui offica"
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