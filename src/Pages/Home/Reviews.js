import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../../components/ReviewCard"
import { carouselReview } from "../Data"

const Review = () => {
  let settings = {
    dots: true,
    arrows: false,
    autoplaySpeed: 4500,
    autoplay: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  return (
    <section className="review-section" >
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>Customer Reviews</h1>
            <Slider
              {...settings}
            >
              {
                carouselReview.map((data, ind) => {
                  return (
                    <ReviewCard
                      key={ind}
                      name={data.name}
                      detail={data.detail}
                      quote={data.quote}
                      star={data.start}
                    />
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )


}

export default Review