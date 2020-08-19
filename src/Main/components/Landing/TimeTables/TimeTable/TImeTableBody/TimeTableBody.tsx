import React from 'react';
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";
import moment from "moment";
import {keys} from "@material-ui/core/styles/createBreakpoints";

export interface Event {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    day: WeekIndex | [WeekIndex, WeekIndex];
}

interface Props {
    events: Event[];
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


const TimeTableBody = ({events}: Props) => {
    let index = 0;

    return (
        <TableBody>
        </TableBody>
    );
}

export default TimeTableBody;