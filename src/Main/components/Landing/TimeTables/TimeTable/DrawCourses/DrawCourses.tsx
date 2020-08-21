import React from 'react';

import { Typography } from '@material-ui/core';

interface Props {
    end: number;
    start: number;
    event: Event;
}

export interface Event {
    id: string,
    startTime: string;
    endTime: string;
    day: string;
    title: string;
}

const DrawCourses = ({start, end, event}: Props) => (
    <div style={{
        width: '100%', height: (end + 'px'),
        position: 'absolute',
        top: (start +'px'), backgroundColor: '#02baa8',
        color: 'white',
        fontSize: '2em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        userSelect: 'none',
    }} >
        <Typography align='center'>{event.title}</Typography>
        <Typography align='center'>{event.startTime + '-' + event.endTime}</Typography>
    </div>
);

export default DrawCourses;