import React from "react";
import {ListItem, ListItemText, makeStyles} from "@material-ui/core";

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
        alignItems: 'start'
    },
    primary: {
        color: 'white'
    },
    secondary: {
        color: 'white'
    }
});

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
}

interface Props {
    data: CourseModel
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

const Course = ({data}: Props) => {
    const classes = useStyles();
    const itemListClasses = useListStyles();
    const bgColour = getBackgroundColor(data.Status);

    return (
        <ListItem classes={classes} style={{backgroundColor: bgColour}}>
            <ListItemText classes={itemListClasses} primary={data.Status} />
            <ListItemText classes={itemListClasses} primary={data.Title + ', ' + data.Subject}/>
            <ListItemText classes={itemListClasses} secondary={'Days: ' + data.Days + ', Time: ' + data.StartTime + ' - ' + data.EndTime}/>
            <ListItemText classes={itemListClasses} secondary={'Instructor: ' + data.Instructor}/>
            <ListItemText classes={itemListClasses} secondary={data.Schedule + ', CRN: ' + data.CRN + ', Credits(' + data.Credits + ')'}/>
        </ListItem>);
}

export default Course;

