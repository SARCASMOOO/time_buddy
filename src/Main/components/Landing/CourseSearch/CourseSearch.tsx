import React from "react";
import styles from './CourseSearch.module.css';
import {List} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Course from "./Course/Course";

const useStyles = makeStyles({
    CourseSearch: {
        height: '70vh',
        overflow: 'scroll'
    }
});

const CourseSearch = () => {
    const classes = useStyles();

    return (
        <List disablePadding aria-label="secondary mailbox folders" className={classes.CourseSearch}>
            <Course/>
        </List>);
}

export default CourseSearch;