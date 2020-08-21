import React from 'react';
import moment from "moment";
import classes from './TimeTable.module.css';
import TimeTableHeader from "./TimeTableHeader/TimeTableHeader";
import TimeTableBody from './TimeTableBody/TimeTableBody';
import TimeTableFooter from "./TimeTableFooter/TImeTableFooter";

const events = [
    {
        id: '1',
        title: 'COMP 4001',
        startTime: '9:00 AM',
        endTime: '1:00 PM',
        day: 'Saturday'
    },
    {
        id: '2',
        title: 'COMP 4001',
        startTime: '1:30 PM',
        endTime: '9:00 PM',
        day: 'Saturday'
    },
    {
        id: '3',
        title: 'COMP 4001',
        startTime: '1:30 PM',
        endTime: '9:00 PM',
        day: 'Sunday'
    }
];

const TimeTable = () => {
    return (
        <div className={classes.TimeTable}>
            <TimeTableHeader/>
            <TimeTableBody events={events}/>
            <TimeTableFooter/>
        </div>
    )
};

export default TimeTable;