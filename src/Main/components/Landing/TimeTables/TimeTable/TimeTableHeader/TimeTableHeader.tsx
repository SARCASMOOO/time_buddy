import React from 'react';
import {TableCell, TableHead, TableRow} from "@material-ui/core";

const TimeTableHeader = () => (
    <TableHead>
        <TableRow>
            <TableCell align='center'>TIME</TableCell>
            <TableCell align='center'>Sunday</TableCell>
            <TableCell align='center'>Monday</TableCell>
            <TableCell align='center'>Tuesday</TableCell>
            <TableCell align='center'>Wednesday</TableCell>
            <TableCell align='center'>Thursday</TableCell>
            <TableCell align='center'>Friday</TableCell>
            <TableCell align='center'>Saturday</TableCell>
        </TableRow>
    </TableHead>
);

export default TimeTableHeader;