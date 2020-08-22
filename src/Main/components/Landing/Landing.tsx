import React from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
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

const onDragStart = () => {
    console.log('Drag start');
}

const onDragEnd = () => {
    console.log('Drag end');
}

const onDragUpdate = () => {
    console.log('Drag Update');
}

const Landing = () => {
    const classes = useStyles();
    const classesCard = useStylesCard();
    const cardStyles = useCardStyles();
    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragEnd}
            onDragEnd={onDragUpdate}
        >
            <h1>Schedules</h1>
            <div className={classes.Landing}>
                <TimeTables/>
                <Card variant="outlined" classes={cardStyles}>
                    <CardHeader title='Courses' classes={classesCard}/>
                    <CourseSearch/>
                </Card>
            </div>
        </DragDropContext>)
        ;
}

export default Landing;