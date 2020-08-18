import React from 'react';
import moment from "moment";
import {Table, TableBody, TableContainer, TableCell, TableHead, TableRow} from '@material-ui/core';

interface Props {
    classes: Object;
}

const TimeTable = (props: Props) => {
    return (
        <TableContainer>
            <Table size='small' stickyHeader>
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
                <TableBody>
                    <TableRow>
                        <TableCell align='center'>7:00</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                        <TableCell align='center'>C1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TimeTable;