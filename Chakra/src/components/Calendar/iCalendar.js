import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import CalendarIcon from './iCalendarIcon';
import './iCalendar.css';



function ICalendar(props) {
    const [value, onChange] = useState([new Date(), new Date()]);

    let makeRangeDisabled = false


    return (
        <div className="calendarWrapper">
            <DateRangePicker
                minDate={new Date()}
                showNeighboringMonth={true}
                selectRange={true}
                next2Label={null}
                prev2Label={null}
                calendarIcon={<CalendarIcon/>}
                onChange={onChange}
                value={value}
                required={true}
                disabled={props.disabled}
                rangeDivider={null}
            />
        </div>
    );
}

export default ICalendar;