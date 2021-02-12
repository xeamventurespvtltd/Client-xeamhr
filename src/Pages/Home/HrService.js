import React from "react";
import ServiceCarousel from "./ServiceCarousel"
import BelowService from "./BelowService"
import icon0 from "../../assests/icon/icons8-client-management-96.png"
import icon1 from "../../assests/icon/icons8-file-100.png"
import icon2 from "../../assests/icon/icons8-google-calendar-100.png"
import icon3 from "../../assests/icon/icons8-money-bag-100.png"
import icon4 from "../../assests/icon/icons8-omnichannel-100.png"
import icon5 from "../../assests/icon/icons8-repository-100.png"
import icon6 from "../../assests/icon/icons8-resume-100.png"
import icon7 from "../../assests/icon/icons8-schedule-100.png"
import icon8 from "../../assests/icon/icons8-task-100.png"
import icon9 from "../../assests/icon/icons8-work-100.png"
import image0 from "../../assests/image/anyImage.jpg"
import image1 from "../../assests/image/imze_anim.png"
import image2 from "../../assests/image/1_jFyawcsqoYctkTuZg6wQ1A.jpeg"
import image3 from "../../assests/image/968361.jpg"
import image4 from "../../assests/image/citizen.jpg"
import image5 from "../../assests/image/images (1).jpg"
import image6 from "../../assests/image/images (2).jpg"
import image7 from "../../assests/image/images.jpg"
import image8 from "../../assests/image/imze_anim.png"
import image9 from "../../assests/image/photo-1494253109108-2e30c049369b.jpg"

const services = [
  {
    id: 0,
    icon: icon0,
    name: "Management",
    image: image0,
    heading: "Mark your attendace in a perfect way",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 1,
    icon: icon1,
    name: "Documents",
    image: image1,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 2,
    icon: icon2,
    name: "Calender",
    image: image2,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 3,
    icon: icon3,
    name: "Payroll",
    image: image3,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 4,
    icon: icon4,
    name: "Communication",
    image: image4,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 5,
    icon: icon5,
    name: "Projects",
    image: image5,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  },
  {
    id: 6,
    icon: icon6,
    name: "Attendance",
    image: image6,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 7,
    icon: icon7,
    name: "Leave",
    image: image7,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 8,
    icon: icon8,
    name: "Documents",
    image: image8,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  {
    id: 9,
    icon: icon9,
    name: "Documents",
    image: image9,
    heading: "Analyze your abcd",
    content: {
      line1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      line3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  }
]
class HrService extends React.Component {
  state = {
    Id: 0,
    Data: null
  }
  imageClicked = (data) => {
    this.setState({
      Id: data.id,
      Data: data,
    })
  }
  render() {
    return (
      <section className="service-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="service-title mb-3">
                <h1>Complete HRMS Services</h1>
                <p>Lorem Ipsum is simply text of the priting</p>
              </div>

              <ServiceCarousel
                services={services}
                imageClicked={this.imageClicked}
                Id={this.state.Id}
              />
              <BelowService Data={(this.state.Data) ? this.state.Data : services[0]} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HrService