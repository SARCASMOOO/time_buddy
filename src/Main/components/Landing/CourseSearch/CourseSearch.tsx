import React from "react";
import styles from './CourseSearch.module.css';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    CourseSearch: {
        height: '70vh',
        overflow: 'scroll'
    }
});

const CourseSearch = () => {
    const classes = useStyles();

    return (
        <>
        <h1>Courses Header</h1>
        <List component="nav" aria-label="secondary mailbox folders" className={classes.CourseSearch}>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>            <ListItem button>
            <ListItemText primary="Inbox"/>
        </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>            <ListItem button>
            <ListItemText primary="Inbox"/>
        </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Inbox"/>
            </ListItem>
        </List>
            </>);
}

export default CourseSearch;