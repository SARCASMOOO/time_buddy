import React from 'react';
import moment from "moment";
import classes from './TimeTable.module.css';
import TimeTableHeader from "./TimeTableHeader/TimeTableHeader";
import TimeTableBody from './TimeTableBody/TimeTableBody';

const events = [{id: '1', title: 'COMP 4001', startTime: moment().calendar(), endTime: moment().add(1, 'hour').calendar(), day: 'Saturday'}];

const TimeTable = () => {
    return (
        <div className={classes.TimeTable}>
            <TimeTableHeader/>
            <TimeTableBody/>
            <div style={{backgroundColor: 'cyan'}}>3</div>
        </div>
    )
};

export default TimeTable;