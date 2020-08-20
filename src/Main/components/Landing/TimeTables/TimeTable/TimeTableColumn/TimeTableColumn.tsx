import React from "react";
import classes from './TimeTableColumn.module.css';
import TimeTableCell from "../TimeTableCell/TimeTableCell";
import DrawCourses from '../DrawCourses/DrawCourses';

interface Props {
    events: any[];
    isTime?: boolean;
}

const timeIntervals = ['7:00 AM',
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
];

const TimeTableColumn = ({events, isTime}: Props) => {
    if (isTime) {
        return <div className={classes.TimeTableColumn} style={{borderRight: 'black 1px solid'}}>
            {timeIntervals.map((time) => <TimeTableCell text={time}/>)}
        </div>;
    } else {
        return <div className={classes.TimeTableColumn}>
            {timeIntervals.map((time) => <TimeTableCell/>)}
            <DrawCourses/>
        </div>;
    }
}

export default TimeTableColumn;
