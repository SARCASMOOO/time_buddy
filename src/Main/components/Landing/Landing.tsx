import React, {Fragment} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
import styles from './Landing.module.css';
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    Landing: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        height: '80%',
        margin: '25px',
    }
});


const Landing = () => {
    const classes = useStyles();
    return (<>
        <h1>Landing</h1>
        <div className={classes.Landing}>
            <TimeTables/>
            <Card variant="outlined">
                <CourseSearch/>
            </Card>
        </div>
    </>);
}

export default Landing;