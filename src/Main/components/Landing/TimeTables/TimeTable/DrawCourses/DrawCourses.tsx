import React, {useState} from 'react';

import {Typography} from '@material-ui/core';
import styles from './DrawCourses.module.css';
import { pure } from 'recompose';

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


interface Props {
    end: number;
    start: number;
    event: Event;
    removeCourse: (id: string) => void;
}

export interface Event {
    id: string,
    startTime: string;
    endTime: string;
    day: string;
    title: string;
}

const DrawCourses = ({start, end, event, removeCourse}: Props) => {
    return (
        <div
            className={styles.Button}
            onClick={() => {
                removeCourse(event.id);
            }}
            style={{
                width: '100%', height: (end + 'px'),
                position: 'absolute',
                top: (start + 'px'), backgroundColor: '#02baa8',
                color: 'white',
                fontSize: '2em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                userSelect: 'none',
            }}>
            <Typography align='center'>{event.title}</Typography>
            <Typography align='center'>{event.startTime + '-' + event.endTime}</Typography>
        </div>);
}

export default pure(DrawCourses);