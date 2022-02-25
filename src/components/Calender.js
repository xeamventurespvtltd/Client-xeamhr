import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = ({ calenderTime }) => {
    const [value, onChange] = useState(new Date());

    const onCalendar = (date) => {
        const timeStamp = moment(date).valueOf();
        const formatDate = moment(timeStamp).format("YYYY/MM/DD")
        //console.log("MOMENT: ", timeStamp, date, formatDate)
        onChange(date)
        calenderTime(formatDate)
    }

    return (
        <>
            <DatePicker
                onChange={onCalendar}
                value={value}
            />
        </>
    );
}
export default Calender