import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ScheduleBook from "./ScheduleBook";
import BigFooter from "../Footer/BigFooter"
import SmalllFooter from "../Footer/SmallFooter"
import DateForDemo from "./DateForDemo";
import Loader from "../../components/Loader";
import "./BookaDemo.css";

const points = [
  "Workforce tracking",
  "Timely salary calculations",
  "Achieve increase in employee performance",
  "Reduce HR operational cost up to 50%",
  "Real-time support"
]

const BookaDemo = () => {
  const [loading, setLoading] = useState(false)
  const screenLoader = (value) => {
    setLoading(value)
  }
  return (
    <section className="book_a_demo-section">
      {(loading) ? <Loader /> : null}
      <Navbar
        header="headerBook"
      />
      <ScheduleBook
        heading="Schedule a Demo"
        points={points}
      />
      <DateForDemo
        screenLoader={screenLoader}
      />
      <div className="query-schedule">
        <div className="container">
          <h6>For any kind of query, Contact us at: <b>9876543210</b> </h6>
        </div>
      </div>
      <BigFooter />
      <SmalllFooter />
    </section>
  )
}
export default BookaDemo