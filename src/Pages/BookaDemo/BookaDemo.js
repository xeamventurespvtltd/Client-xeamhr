import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { leaveHome } from '../../actions';
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

const BookaDemo = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!props.header){
            //console.log("CALL LEAVE HOME");
            props.leaveHome('headerBook');
        }
    }, [])

    const showLoader = () => {
        setLoading(true)
    }

    const hideLoader = () => {
        setLoading(false)
    }

    return (
        <section className="book_a_demo-section">
            {(loading) && 
                <Loader 
                    title="Loading..."
                    loading={loading}
                />
            }
            <ScheduleBook
                heading="Schedule a Demo"
                points={points}
            />
            <DateForDemo showLoader={showLoader} hideLoader={hideLoader} />
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
const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

export default connect(mapStateToProps, { leaveHome })(BookaDemo);