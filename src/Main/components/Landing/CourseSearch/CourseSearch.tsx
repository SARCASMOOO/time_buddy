import React, {useEffect, useState} from "react";
import styles from './CourseSearch.module.css';
import {List} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Course from "./Course/Course";
import {withFirebase} from "../../Firebase";
import Firebase from "../../Firebase";
import {Droppable} from "react-beautiful-dnd";

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
    index: number;
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
        <Droppable droppableId="course-search-id">
            {(provided) => (
                <List disablePadding aria-label="secondary mailbox folders"
                      className={classes.CourseSearch}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                >
                    {
                        state.courses.map((course: CourseModel, index) => {
                            course.index = index;
                        return (
                            <Course data={course}/>
                        );
                    })}
                    {provided.placeholder}
                </List>)}
        </Droppable>);
}

export default withFirebase(CourseSearch);