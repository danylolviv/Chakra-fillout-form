import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import CalendarIcon from "../Calendar/iCalendarIcon";
import './idatePicker.css';
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

function IDatePickerStart(props) {

    return (
        <div className="iDatePickerWrapper">
            <DatePicker
                calendarIcon={<CalendarIcon/>}
                minDate={new Date()}
                maxDate={props.maxDate}
                next2Label={null}
                prev2Label={null}
                clearIcon={null}
                onChange={props.setValue}
                value={props.startDateValue}
                disabled={props.disabled}
            />
        </div>
    );
}

export default IDatePickerStart;