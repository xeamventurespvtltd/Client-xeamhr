import React, { useState } from "react";
import Proptypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/VerticalCarousel.css";

const VerticalCarousel = ({ data }) => {
  const [selected, setSelected] = useState(data[0]);
  let settings = {
    speed: 120,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: false,
    // arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow next"
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-double-down"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow prev"
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      >
        <i className='fas fa-chevron-double-up'></i>
      </div>
    );
  }


  const renderResult = data.map((time, ind) => {
    return (
      <div
        key={ind}
        className={selected.id === ind ? "time-box active text-center" : "time-box text-center"}
        onClick={() => setSelected(time)}
      >
        <span>{time.value}</span>
      </div >
    )
  })

  return (
    <section className="vertical-carousel">
      <Slider
        {...settings}
      >
        {renderResult}
      </Slider>
    </section>
  );
}

VerticalCarousel.propTypes = {
  data: Proptypes.array.isRequired,
};

export default VerticalCarousel