import React, {useEffect, useState} from "react";
import styles from './CourseSearch.module.css';
import {List} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Course from "./Course/Course";
import {Droppable} from "react-beautiful-dnd";

const useStyles = makeStyles({
    CourseSearch: {
        height: '70vh',
        overflowY: 'scroll'
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
}

const CourseSearch = ({courses, loading}: Props) => {
    const classes = useStyles();

    return (
        <Droppable droppableId="course-search-id">
            {(provided) => (
                <List disablePadding aria-label="secondary mailbox folders"
                      className={classes.CourseSearch}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}
                >
                    {
                        courses.map((course: CourseModel, index) => {
                            course.index = index;
                        return (
                            <Course data={course}/>
                        );
                    })}
                    {provided.placeholder}
                </List>)}
        </Droppable>);
}

export default CourseSearch;