import React from "react";
import Navbar from "../../components/Navbar";
import ScheduleBook from "./ScheduleBook";
import BigFooter from "../Footer/BigFooter"
import SmalllFooter from "../Footer/SmallFooter"
import DateForDemo from "./DateForDemo"
import "./BookaDemo.css"

const points = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
]

const BookaDemo = () => {
  return (
    <>
      <Navbar
        header="headerBook"
      />
      <ScheduleBook
        heading="Schedule a Demo"
        points={points}
      />
      <DateForDemo />
      <section className="query-schedule">
        <div className="container">
          <h6>For any kind of query, Contact us at: <b>9876543210</b> </h6>
        </div>
      </section>
      <BigFooter />
      <SmalllFooter />
    </>
  )
}
export default BookaDemo