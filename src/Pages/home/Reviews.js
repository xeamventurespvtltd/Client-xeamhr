import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../../components/ReviewCard"
import { carouselReview } from "../Data";
import { clientImage } from "../Data"

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
          slidesToShow: 1,
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
    <section id="review" className="review-section" >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-5 mx-auto">
            <div className="our-partner">
              <h2 className="mb-4">Our Top Clients</h2>
              <div className="row g-0">
                {
                  clientImage.map((img, ind) => {
                    return (
                      <div key={ind} className="col-md-6 col-sm-6 col-6">
                        <div className="client-image">
                          <img src={img} alt="client-images" />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="client-review">
              <h1 className="mb-5"><span>Our Client's Reviews</span></h1>
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
      </div>
    </section>
  )


}

export default Review