import React from "react";
// import OwlCarousel from "react-owl-carousel"
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OwlDemo1 = (props) => {
  let settings = {
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  // console.log("rendered")
  const looper = props.services.map((data, ind) => {
    console.log("________>", data)
    return (
      <div
        className="hr-box"
        onClick={() => props.imageClicked(data)}
      >
        <img src={data.icon} alt="hr" />
        <p>{data.name}</p>
      </div>
    )
  })
  return (
    <>
      <Slider
        {...settings}
      >
        {looper}

      </Slider>
    </>
  )
}
export default React.memo(OwlDemo1)
// export default OwlDemo1