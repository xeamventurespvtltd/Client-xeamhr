import React, { useState } from "react";
import moment from "moment";
import Calender from "../../components/Calender";
import TimeDuration from "./TimeDuration"

const DateForDemo = ({ showLoader, hideLoader }) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [date, setDate] = useState(`${moment().year()}/${((moment().month() + 1) < 10)? '0'+(moment().month() + 1) : (moment().month() + 1)}/${moment().date()}`);

    const calenderTime = (value) => {
        setDate(value)
        //console.log("SUBMIT: ", value)
    }

    return (
        <section className="date-time-section container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="cal-body">
                        <div className="calender-box">
                            <div className="cal-top">
                                <div className="cal-logo">LOGO</div>
                                <h6>Select Date for Demo</h6>
                            </div>
                            <Calender
                                calenderTime={calenderTime}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 g-0">
                    {
                        (isSubmitted) ? <h1>form submitted</h1> : (
                            <TimeDuration   
                                showLoader={showLoader} 
                                hideLoader={hideLoader}
                                date={date}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default DateForDemo;