import React, {Fragment} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
import styles from './Landing.module.css';
import {Card, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    Landing: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        height: '80%',
        margin: '25px',
    }
});

const useStylesCard = makeStyles({
    root: {
        backgroundColor: '#02baa8',
        color: 'white',
    }
});

const useCardStyles = makeStyles({
    root: {
        border: '1px solid',
        boxShadow: '1px 1px 1px grey'
    }
});

const Landing = () => {
    const classes = useStyles();
    const classesCard = useStylesCard();
    const cardStyles = useCardStyles();
    return (<>
        <h1>Landing</h1>
        <div className={classes.Landing}>
            <TimeTables/>
            <Card variant="outlined" classes={cardStyles}>
                <CardHeader title='Courses' classes={classesCard}/>
                <CourseSearch/>
            </Card>
        </div>
    </>);
}

export default Landing;