import React from 'react';
import TimeTableCell from '../TimeTableCell/TimeTableCell';
import classes from './TimeTableHeader.module.css';
const headers = ['Time', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimeTableHeader = () => (
    <div className={classes.TimeTableHeader}>
        {headers.map((header: string) => <TimeTableCell text={header}/>)}
    </div>
);

export default TimeTableHeader;
