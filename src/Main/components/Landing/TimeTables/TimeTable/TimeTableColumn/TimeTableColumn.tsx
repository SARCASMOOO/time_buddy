import React from "react";
import classes from './TimeTableColumn.module.css';
import TimeTableCell from "../TimeTableCell/TimeTableCell";
import DrawCourses from '../DrawCourses/DrawCourses';

import { Event } from '../TimeTableBody/TimeTableBody';

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
    isTime?: boolean;
    day: string | null;
    removeCourse: (id: string) => void;
}

const timeIntervals = ['7:00 AM',
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
];

// Return a pair with hours.
function convertToHours(time: string): number {
    const [hour, minute] = time.split(':');
    const minutes = parseInt(minute.replace(/[^0-9]/g, ''));

    let hours = parseInt(hour);
    hours = time.includes('PM') ? hours + 12 : hours;

    return hours + minutes/60;
}

const calculateHeightOfCourse = (event: Event, calendarInterval: {startTime: number, endTime: number} = {startTime: 7, endTime: 23}, blockSize: number = 32) => {
    const startHours = convertToHours(event.startTime);
    const endHours = convertToHours(event.endTime);

    console.log(startHours);
    console.log(endHours);

    const yPosition = Math.max(0, (startHours - calendarInterval.startTime) * blockSize);
    let height = (endHours-startHours)*blockSize;

    const maximumAllowedHeightForThisStartTime = (calendarInterval.endTime - calendarInterval.startTime) * blockSize - yPosition;
    height = Math.min(height, maximumAllowedHeightForThisStartTime);

    return [yPosition, height];
}

// {
//     id: '1',
//     title: 'COMP 4001',
//     startTime: '10:00 AM',
//     endTime: '9:00 AM',
//     day: 'Saturday'
// }

const TimeTableColumn = ({events, isTime, day, removeCourse}: Props) => {
    const currentEvents = events.filter(event => event.day === day);
    console.log('Current events: ' + currentEvents);
    const blockSize = 32;
    const calendarInterval = {startTime: 7, endTime: 23};
    console.log('I am time table column');
    if(!day) return <></>;

    if (isTime) {
        return <div className={classes.TimeTableColumn} style={{borderRight: 'black 1px solid'}}>
            {timeIntervals.map((time) => <TimeTableCell text={time}/>)}
        </div>;
    } else {
        return <div className={classes.TimeTableColumn}>
            {timeIntervals.map((time, index) => <TimeTableCell key={index}/>)}
            {
                currentEvents.map(event => {
                    const dim = calculateHeightOfCourse(event, calendarInterval, blockSize);
                    return (<DrawCourses removeCourse={removeCourse} event={event} start={dim[0]} end={dim[1]}/>)
                })
            }
        </div>;
    }
}

export default TimeTableColumn;
