import React from 'react';
import moment from "moment";
import classes from './TimeTable.module.css';
import TimeTableHeader from "./TimeTableHeader/TimeTableHeader";
import TimeTableBody from './TimeTableBody/TimeTableBody';
import TimeTableFooter from "./TimeTableFooter/TImeTableFooter";
import TimeTableColumn from "./TimeTableColumn/TimeTableColumn";

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

interface TableEvent {
    id: string
    title: string;
    startTime: string;
    endTime: string;
    day: string;
}

interface Props {
    events: TableEvent[];
    removeCourse: (id: string) => void;
}

const TimeTable = ({events, removeCourse}: Props) => {
    return (
        <div className={classes.TimeTable}>
            <TimeTableHeader/>
            <TimeTableBody removeCourse={removeCourse} events={events}/>
            <TimeTableFooter/>
        </div>
    )
};

export default TimeTable;