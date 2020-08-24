import React, {useEffect, useState} from "react";
import styles from './CourseSearch.module.css';
import {List} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Course from "./Course/Course";
import CircularProgress from '@material-ui/core/CircularProgress';
import {SchoolContext} from '../../Navigation/SelectSchool/SelectSchool';

const useStyles = makeStyles({
    CourseSearch: {
        height: '70vh',
        overflowY: 'scroll',
        backgroundColor: '#02baa8'
    }
});

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
    courses: CourseModel[];
    loading: boolean;
    addCourse: (course: CourseModel) => void;
}

const CourseSearch = ({courses, loading, addCourse}: Props) => {
    const classes = useStyles();

    const content = loading ? (<CircularProgress size='4em' className={styles.Spinner}/>) : (
        <SchoolContext.Consumer>
            {value => {
                if(value === 'Select School') {
                    console.log('The school is not selected.');
                }
                console.log('The school is not selected.');
                return (<List disablePadding aria-label="secondary mailbox folders"
                      className={classes.CourseSearch}>
                    {
                        courses.map((course: CourseModel, index) => {
                            course.index = index;
                            return (
                                <Course addCourse={addCourse} data={course}/>
                            );
                        })
                    }
                </List>)
            }}
        </SchoolContext.Consumer>)

    return content;
}

export default CourseSearch;