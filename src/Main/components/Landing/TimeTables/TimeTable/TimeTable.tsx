import React from 'react';
import TimeTableHeader from './TimeTableHeader/TimeTableHeader';

import {Table, TableContainer} from '@material-ui/core';
import moment from "moment";


const events = [
    {id: '1', title: 'COMP 4001', startTime: moment().calendar(), endTime: moment().add(1, 'hour').calendar(), day: 'Saturday'}
    ];


const TimeTable = () => {
    return (
        <TableContainer>
            <Table size='small' stickyHeader>
                <TimeTableHeader/>
            </Table>
        </TableContainer>
    )
};

export default TimeTable;