import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import CalendarIcon from './iCalendarIcon';
import './iCalendar.css';



function ICalendar() {
    const [value, onChange] = useState([new Date(), new Date()]);
    console.log(value);

    return (
        <div className="calendarWrapper">
            <DateRangePicker
                showNeighboringMonth={true}
                selectRange={true}
                next2Label={null}
                prev2Label={null}
                calendarIcon={<CalendarIcon/>}
                onChange={onChange}
                value={value}
                required={true}
            />
        </div>
    );
}

export default ICalendar;