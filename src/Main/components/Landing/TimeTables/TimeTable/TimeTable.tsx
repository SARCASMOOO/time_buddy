import React from 'react';
import TimeTableHeader from './TimeTableHeader/TimeTableHeader';
import TimeTableBody from './TImeTableBody/TimeTableBody';

import {Table, TableContainer} from '@material-ui/core';
import moment from "moment";

const week = {
    'Saturday': [
        {id: '1', title: 'COMP 4001', startTime: moment().calendar(), endTime: moment().add(1, 'hour').calendar()}
    ],
    'Sunday': [],
    'Monday': [],
    'Tuesday': [],
    'Wednesday': [],
    'Thursday': [],
    'Friday': []
}

const TimeTable = () => {
    return (
        <TableContainer>
            <Table size='small' stickyHeader>
                <TimeTableHeader/>
                <TimeTableBody week={week}/>
            </Table>
        </TableContainer>
    )
};

export default TimeTable;