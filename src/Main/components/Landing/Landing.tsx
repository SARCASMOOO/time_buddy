import React, {useEffect, useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
import {Card, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {withFirebase} from "../Firebase";
import Firebase from "../Firebase";

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

const onDragEnd = (result: any) => {
    const {destination, source, draggableId} = result;

    if (!destination) return;

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return;
    }
}

const onDragUpdate = () => {
    console.log('Drag Update');
}

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

const Landing = ({firebase}: Props) => {
    const classes = useStyles();
    const classesCard = useStylesCard();
    const cardStyles = useCardStyles();

    const [state, setState] = useState<State>({
        courses: [],
        loading: true,
    });

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
                    <CourseSearch courses={state.courses} loading={state.loading}/>
                </Card>
            </div>
        </DragDropContext>)
        ;
}

export default withFirebase(Landing);