import React from 'react';
import TimeTableColumn from '../TimeTableColumn/TimeTableColumn';
import classes from './TimeTableBody.module.css';

const headers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface Props {
    events: any[];
}

const TimeTableBody = ({events}: Props) => (
    <div className={classes.TimeTableBody}>
        <TimeTableColumn events={events} isTime  />
        {headers.map(() => <TimeTableColumn events={events} />)}
    </div>
)

export default TimeTableBody;