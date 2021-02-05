import React from "react";
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { carouselImage } from "../Data"

const OwlDemo1 = (props) => {



  const looper = props.services.map((data, ind) => {
    return (
      <div key={ind} className="item">
        <div
          className={data.active ? 'hr-box active' : 'hr-box'}
          onClick={() => {
            props.imageClicked(data.id, data)
          }}
        >
          <img src={data.icon} alt="hr" />
          <p>{data.name}</p>
        </div>
      </div>
    )
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

//export default React.memo(OwlDemo1)
export default OwlDemo1