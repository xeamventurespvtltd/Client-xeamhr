import React from "react";
import Proptypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VerticalCarousel = ({ data }) => {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-arrow next"
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-double-right"></i>
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
        <i className='fas fa-chevron-double-left'></i>
      </div>
    );
  }


  const renderResult = data.map((time, ind) => {
    return (
      <div
        key={ind}
        className="time-box text-center"
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