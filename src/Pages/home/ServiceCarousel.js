import React, { useState, useEffect } from "react";
// import OwlCarousel from "react-owl-carousel"
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OwlDemo1 = (props) => {
  let [select, setSelect] = useState(false);

  let settings = {
    speed: 500,
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
  // useEffect(() => {
  // }, [select])
  const updateCarousel = (e, data) => {
    console.log(e)
    const divId = e.target.getAttribute('data-id')
    const div = document.getElementById('itemContainer' + divId)
    div.classList.add('active')
    props.imageClicked(data)
  }

  const looper = props.services.map((data, ind) => {

    return (
      <div
        key={ind}
        className={props.Id === ind ? "hr-box active" : "hr-box"}
        onClick={(e) => updateCarousel(e, data)}
        id={`itemContainer${data.id}`}
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
export default OwlDemo1