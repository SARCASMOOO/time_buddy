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

interface CourseModel {
    CRN: string;
    Credits: number;
    Days: string;
    EndTime: string;
    Instructor: string;
    Notes: string;
    Schedule: string;
    Section: string;
    "Section Information": string;
    StartTime: string;
    Status: string;
    Subject: string;
    Title: string;
    uid: string;
    index: number;
}

interface Props {
    events: Event[];
    removeCourse: (id: string) => void;
}

const TimeTableBody = ({events, removeCourse}: Props) => (
    <div className={classes.TimeTableBody}>
        <TimeTableColumn removeCourse={removeCourse} events={events} isTime  day='none'/>
        {headers.map((day) => <TimeTableColumn removeCourse={removeCourse}  events={events} day={day} />)}
    </div>
)

export default TimeTableBody;