import React from "react";

const MapSection = () => {
  return (
    <section className="map-section">
      <h3>YOU CAN ALSO VISIT US THROUGH MAP</h3>
      <div className="map-container">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe title="googlemap" width="100%" height="120" id="gmap_canvas" src="https://maps.google.com/maps?q=Xeam%20ventures&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection