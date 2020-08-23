import React from "react";
import {ListItem, ListItemText, makeStyles} from "@material-ui/core";
import styles from './Course.module.css';

const useListStyles = makeStyles({
    primary: {
        color: 'white'
    },
    secondary: {
        color: 'white'
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
    data: CourseModel,
    removeCourse: (id: string) => void;
}

const getBackgroundColor = (status: string) => {
    switch (status) {
        case 'Registration Closed':
            return '#E44D2E';
        case 'Registration Open':
            return '#009688';
        default:
            return '#ccc';
    }
}

const Course = ({data, removeCourse}: Props) => {
    const bgColor = getBackgroundColor(data.Status);

    const useStyles = makeStyles({
        root: {
            border: '1px solid black',
            boxShadow: '1px 1px 1px grey',
            color: 'white',
            cursor: 'default',
            webkitUserSelect: 'none',
            mozUserSelect: 'none',
            msUserSelect: 'none',
            oUserSelect: 'none',
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            backgroundColor: bgColor
        }
    });

    const classes = useStyles();
    const itemListClasses = useListStyles();

    const sec1 = 'Days: ' + data.Days + ', Time: ' + data.StartTime + ' - ' + data.EndTime;
    const sec2 = data.Schedule + ', CRN: ' + data.CRN + ', Credits(' + data.Credits + ')';

    const disableDrag = (data.Status === 'Registration Closed');
    const courseStyle = disableDrag ? '' : styles.Button;
    return (
        <ListItem
            className={courseStyle}
            key={data.uid}
            classes={classes}>
            <ListItemText classes={itemListClasses} primary={data.Status}/>
            <ListItemText classes={itemListClasses} primary={data.Title + ', ' + data.Subject}/>
            <ListItemText classes={itemListClasses} secondary={sec1}/>
            <ListItemText classes={itemListClasses} secondary={'Instructor: ' + data.Instructor}/>
            <ListItemText classes={itemListClasses} secondary={sec2}/>
        </ListItem>);
}

export default Course;

