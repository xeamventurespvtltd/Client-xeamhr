import React from "react";
import Navbar from "../../components/Navbar";
import ScheduleBook from "./ScheduleBook";
import BigFooter from "../Footer/BigFooter"
import SmalllFooter from "../Footer/SmallFooter"
import DateForDemo from "./DateForDemo"
<<<<<<< HEAD
import "./BookaDemo.css";

const points = [
  "Workforce tracking",
  "Timely salary calculations",
  "Achieve increase in employee performance",
  "Reduce HR operational cost up to 50%",
  "Real-time support"
=======
import "./BookaDemo.css"

const points = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
>>>>>>> 166efbca40ce5ed64eff2f0fa7b9c382ea7e42fc
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