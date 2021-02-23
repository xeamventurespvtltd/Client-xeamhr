<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
import Proptypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/VerticalCarousel.css";

const VerticalCarousel = ({ data }) => {
<<<<<<< HEAD
  // const [selected, setSelected] = useState(data[0]);
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
=======
  const [selected, setSelected] = useState(data[0]);
  let settings = {
    speed: 120,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
    infinite: false,
    // arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
<<<<<<< HEAD
          slidesToShow: 1,
=======
          slidesToShow: 3,
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
<<<<<<< HEAD
          slidesToShow: 1,
=======
          slidesToShow: 3,
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
<<<<<<< HEAD
          slidesToShow: 1,
=======
          slidesToShow: 3,
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
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
<<<<<<< HEAD
        <i className="fas fa-chevron-double-right"></i>
=======
        <i className="fas fa-chevron-double-down"></i>
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
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
<<<<<<< HEAD
        <i className='fas fa-chevron-double-left'></i>
=======
        <i className='fas fa-chevron-double-up'></i>
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
      </div>
    );
  }


  const renderResult = data.map((time, ind) => {
    return (
      <div
        key={ind}
<<<<<<< HEAD
        className="time-box text-center"
=======
        className={selected.id === ind ? "time-box active text-center" : "time-box text-center"}
        onClick={() => setSelected(time)}
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
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