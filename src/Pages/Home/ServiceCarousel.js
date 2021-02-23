import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceCarousel = ({ services, imageClicked, Id }) => {
  let settings = {
    speed: 400,
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
  const looper = services.map((data, ind) => {
    return (
      <div
        key={ind}
        className={Id === ind ? "hr-box activa" : "hr-box"}
        onClick={() => imageClicked(data)}
        id={data.id}
      >
        <img src={data.icon} alt="hr" data-id={data.id} />
        <p data-id={data.id}>{data.name}</p>
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
export default ServiceCarousel