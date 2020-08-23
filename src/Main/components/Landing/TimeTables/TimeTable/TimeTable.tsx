import React from 'react';
import moment from "moment";
import classes from './TimeTable.module.css';
import TimeTableHeader from "./TimeTableHeader/TimeTableHeader";
import TimeTableBody from './TimeTableBody/TimeTableBody';
import TimeTableFooter from "./TimeTableFooter/TImeTableFooter";

interface TableEvent {
    id: string
    title: string;
    startTime: string;
    endTime: string;
    day: string;
}

interface Props {
    events: TableEvent[];
}

const TimeTable = ({events}: Props) => {
    return (
        <div className={classes.TimeTable}>
            <TimeTableHeader/>
            <TimeTableBody events={events}/>
            <TimeTableFooter/>
        </div>
    )
};

export default TimeTable;