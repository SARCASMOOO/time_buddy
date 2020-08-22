import React, {useEffect, useState} from "react";
import styles from './CourseSearch.module.css';
import {List} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Course from "./Course/Course";
import {withFirebase} from "../../Firebase";
import Firebase from "../../Firebase";

const useStyles = makeStyles({
    CourseSearch: {
        height: '70vh',
        overflowY: 'scroll'
    }
});

interface Props {
    firebase: Firebase;
}

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
}

interface State {
    courses: CourseModel[];
    loading: boolean;
}

const CourseSearch = ({firebase}: Props) => {
    const [state, setState] = useState<State>({
        courses: [],
        loading: true,
    });

    const classes = useStyles();

    useEffect(() => {
        console.log('mounted');

        // @ts-ignore
        firebase.getCourses().on('value', snapshot => {
            const coursesObject = snapshot.val();

            if (coursesObject) {
                const courseList = Object.keys(coursesObject).map(key => ({
                    ...coursesObject[key],
                    uid: key,
                }));

                setState({
                    courses: courseList,
                    loading: false,
                });

            } else {
                setState({
                    courses: [],
                    loading: false,
                });
            }
        });
    }, []);

    return (
        <List disablePadding aria-label="secondary mailbox folders" className={classes.CourseSearch}>
            {state.courses.map((course: CourseModel) => {
                return (
                    <Course data={course}/>
                );
            })}
        </List>);
}

export default withFirebase(CourseSearch);