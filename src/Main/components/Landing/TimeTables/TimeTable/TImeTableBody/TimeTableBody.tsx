import React from 'react';
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";
import moment from "moment";
import {keys} from "@material-ui/core/styles/createBreakpoints";

interface Event {
    id: String;
    title: String;
    startTime: any;
    endTime: any;
}

interface Week {
    'Saturday': Event[];
    // 'Sunday'?: Event[];
    // 'Monday'?: Event[];
    // 'Tuesday'?: Event;
    // 'Wednesday'?: Event[];
    // 'Thursday'?: Event[];
    // 'Friday'?: Event[];
}

interface Props {
    week: Week;
}

enum WeekIndex {
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
}

const createRow = (week: Week) => {
    return (<TableRow>
        <TableCell align='center'>7:00</TableCell>
        {Object.keys(week).map((day: string) => {
            // @ts-ignore
            // const result = week[day];
            // if (result && index < result.length && index >= 0) {
            //     const event = result[index];
            //     return (<TableCell align='center'>{event.title}</TableCell>);
            // }
            return null;
        })}
    </TableRow>);
}
const TimeTableBody = ({week}: Props) => {
    let index = 0;

    return (
        <TableBody>
            {createRow(week)}
        </TableBody>
    );
}

export default TimeTableBody;