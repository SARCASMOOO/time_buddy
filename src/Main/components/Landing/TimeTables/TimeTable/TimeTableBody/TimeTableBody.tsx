import React from 'react';
import TimeTableColumn from '../TimeTableColumn/TimeTableColumn';
import classes from './TimeTableBody.module.css';

const headers = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface Event {
    id: string,
    startTime: string;
    endTime: string;
    day: string;
    title: string;
}

interface Props {
    events: Event[];
}

const TimeTableBody = ({events}: Props) => (
    <div className={classes.TimeTableBody}>
        <TimeTableColumn events={events} isTime  day=''/>
        {headers.map((day) => <TimeTableColumn events={events} day={day} />)}
    </div>
)

export default TimeTableBody;