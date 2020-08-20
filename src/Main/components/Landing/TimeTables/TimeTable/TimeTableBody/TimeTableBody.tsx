import React from 'react';
import TimeTableColumn from '../TimeTableColumn/TimeTableColumn';
import classes from './TimeTableBody.module.css';

const headers = ['Time', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimeTableBody = () => (
    <div className={classes.TimeTableBody}>
        {headers.map(() => <TimeTableColumn/>)}
    </div>
)

export default TimeTableBody;