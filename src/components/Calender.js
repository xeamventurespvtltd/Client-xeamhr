import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = ({ calenderTime }) => {
  const [value, onChange] = useState(new Date());

  const onCalendar = (value) => {
    onChange(value)
  }

  useEffect(() => {
    calenderTime(value)
  })

  return (
    <>
      <Calendar
        onChange={onCalendar}
        value={value}
      />
    </>
  );
}
export default Calender