import React from "react"
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewCard from "../../components/ReviewCard"
import { carouselReview } from "../Data"

class Review extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    },
  }

  render() {
    return (
      <section className="review-section" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>Customer Reviews</h1>
              <OwlCarousel className="owl-theme"
                margin={20}
                items="2"
                nav
                autoplay
                dots
                responsive={this.state.responsive}
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
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Review