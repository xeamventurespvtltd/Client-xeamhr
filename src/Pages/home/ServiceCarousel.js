import React from "react";
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlDemo1 = (props) => {
  console.log("rendered")
  const looper = props.services.map((data, ind) => {
    // console.log(data)
    console.log("serviceId", props.Id)
    console.log("serviceInd", ind)
    if (ind === props.Id) {
      return (
        <div key={ind} className="item">
          <div
            className="hr-box active"
            onClick={(e) => {
              props.imageClicked(e, data.id, data)
            }}
          >
            <img src={data.icon} alt="hr" />
            <p>{data.name}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div key={ind} className="item">
          <div
            className="hr-box"
            onClick={(e) => {
              props.imageClicked(e, data.id, data)
            }}
          >
            <img src={data.icon} alt="hr" />
            <p>{data.name}</p>
          </div>
        </div>
      )
    }

  })
  return (
    <>
      <OwlCarousel className="owl-theme"
        margin={30}
        items="5"
        nav
        responsive={props.responsive}
      >
        {looper}
      </OwlCarousel>
    </>
  )
}
export default React.memo(OwlDemo1)
// export default OwlDemo1