import React from "react";
import ServiceCarousel from "./ServiceCarousel"
import BelowService from "./BelowService"
import icon0 from "../../assests/icon/recruitment.png"
import icon1 from "../../assests/icon/exit.png"
import icon2 from "../../assests/icon/icons8-google-calendar-100.png"
import icon3 from "../../assests/icon/icons8-money-bag-100.png"
import icon4 from "../../assests/icon/travel.png"
import icon5 from "../../assests/icon/icons8-repository-100.png"
import icon6 from "../../assests/icon/icons8-resume-100.png"
import icon7 from "../../assests/icon/icons8-schedule-100.png"
import icon8 from "../../assests/icon/performance.png"
import icon9 from "../../assests/icon/inventory.png"
import icon10 from "../../assests/icon/icons8-task-100.png"
import icon11 from "../../assests/icon/icons8-work-100.png"
import image0 from "../../assests/image/recruitment.png"
import image1 from "../../assests/image/imze_anim.png"
import image2 from "../../assests/image/lead.png"
import image3 from "../../assests/image/payroll.png"
import image4 from "../../assests/image/travel.png"
import image5 from "../../assests/image/task.png"
import image6 from "../../assests/image/attendance.png"
import image7 from "../../assests/image/leave.png"
import image8 from "../../assests/image/imze_anim.png"
import image9 from "../../assests/image/photo-1494253109108-2e30c049369b.jpg"
import image10 from "../../assests/image/document.png"

const services = [
  {
    id: 0,
    icon: icon0,
    name: "Recruitment & Onboarding",
    image: image0,
    heading: `Hiring summary of each employee`,
    content: {
      line1: "Status of open positions",
      line2: "Applicants list for future references",
      line3: "Applicants list for future references",
      line4: "Schedule the applicant interview",
      line5: "Handle the paperwork by HR for new hires",
      line6: "Introducing the company policies and upcoming projects."
    }
  },
  {
    id: 1,
    icon: icon10,
    name: "Document Management",
    image: image10,
    heading: `Save the manual efforts to bring accuracy`,
    content: {
      line1: "Gather the information in one place",
      line2: "Sharing the documents with other employees",
      line3: "Employees can read the documents easily",
      line4: "Download the document anytime",
      line5: "Keep track of all the data"
    }
  },

  {
    id: 2,
    icon: icon2,
    name: "Lead management",
    image: image2,
    heading: `To convert the leads into deals`,
    content: {
      line1: "To analyze and accept the incoming quality leads",
      line2: "Manage the leads for new business opportunities",
      line3: "Analyze and track key information about leads",
      line4: "Generate the lead reports"
    }
  },
  {
    id: 3,
    icon: icon3,
    name: "Payroll Management",
    image: image3,
    heading: `Save the time and efforts to reduce the challenges of payrolls`,
    content: {
      line1: "Organize complex salary structures",
      line2: "Industry-particular Pay Schedule",
      line3: "Management of salary sheets of employees",
      line4: "One-click payment",
      line5: "Auto-generated loans and advances",
      line6: "Generation of statutory reports"
    }
  },
  {
    id: 4,
    icon: icon4,
    name: "Travel & Expense",
    image: image4,
    heading: `Travel Requests and approvals are easy now`,
    content: {
      line1: "Raise the requests for travel and expense as per preferences",
      line2: "Approval for the raise requests through whatsapp",
      line3: "Verify all employees expenses details",
      line4: "Claim amount given after approval"
    }
  },
  {
    id: 5,
    icon: icon5,
    name: "Task Management",
    image: image5,
    heading: `Task management to increase profits`,
    content: {
      line1: "To improve the business performance",
      line2: "To increase accountability and productivity",
      line3: "Enhance the financial benefits with task efficiency",
      line4: "Extension of  the due date of the task",
      line5: "Task progression update on whatsapp"
    },
  },
  {
    id: 6,
    icon: icon6,
    name: "Attendance and Time",
    image: image6,
    heading: `Mark attendance from anywhere`,
    content: {
      line1: "Experience the most dynamic Attendance and time management system with real-time tracking and biometric system.",
      line2: "Workforce tracking",
      line3: "Roaster Management",
      line4: "Automate biometric entries",
      line5: "Directly integrated with payroll"
    }
  },
  {
    id: 7,
    icon: icon7,
    name: "Leave management",
    image: image7,
    heading: `Reduce the stress to track leaves on excel sheets`,
    content: {
      line1: "Leave management Dashboard",
      line2: "Highly Configurable Leaves management",
      line3: "One view Reporting",
      line4: "Status of applied, approved and pending leave on whatsapp & E-mail"
    }
  },
  {
    id: 8,
    icon: icon8,
    name: "Performance Management",
    image: image8,
    heading: `User-friendly software to assess the performance of employees`,
    content: {
      line1: "Built smart goals and track the progress",
      line2: "Planning of development and succession",
      line3: "User-friendly navigable dashboard",
      line4: "Performance evaluation cycle",
      line5: "Peer-to-peer 360-degree reviews"
    }
  },
  {
    id: 9,
    icon: icon9,
    name: "Inventory Management",
    image: image9,
    heading: `An integrated approach to business planning and operations`,
    content: {
      line1: "Manage inventory in one place",
      line2: "Stock tracking transparency",
      line3: "Sales and purchase order management",
      line4: "Intelligence reports and analytics"
    }
  },
  {
    id: 10,
    icon: icon1,
    name: "Exit Management",
    image: image1,
    heading: `Approval of the resignation`,
    content: {
      line1: "Manage exit checklist",
      line2: "Notifications for exit related tasks",
      line3: "Resignation letter is generated under employee profile",
      line4: "Calculation of employee work what has been completed or what is pending"
    }
  },

  {
    id: 11,
    icon: icon11,
    name: "Training Schedules",
    image: image9,
    heading: `Schedule training sessions for employee benefits`,
    content: {
      line1: "Provide training to employees",
      line2: "Email notification for attending the training",
      line3: "Regular reminder to the employees for attending the training",
      line4: "Recurring Training setups"
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
      <section id="services" className="service-section">
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