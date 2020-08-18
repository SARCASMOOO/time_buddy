import React from "react";
import {ListItem, ListItemText, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        border: '1px solid black',
        boxShadow: '1px 1px 1px grey',
        backgroundColor: '#ffd54f',
        color: 'black',
        cursor: 'default',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        oUserSelect: 'none',
        userSelect: 'none'
    }
});

const Course = () => {
    const classes = useStyles();

    return (
        <ListItem classes={classes}>
            <ListItemText primary="COMP 4004"/>
            <ListItemText primary="08:30-10:00"/>
        </ListItem>);
}

export default Course;