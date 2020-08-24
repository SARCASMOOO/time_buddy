import React, {useContext, useEffect, useState} from "react";
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
import {Card, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {withFirebase} from "../Firebase";
import Firebase from "../Firebase";
import {UniversityContext} from "../Navigation/SelectSchool/globalState";

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
    addedCourses: CourseModel[];
    loading: boolean;
}

const Landing = ({firebase}: Props) => {
    const classes = useStyles();
    const classesCard = useStylesCard();
    const cardStyles = useCardStyles();
    const [uni, _] = useContext(UniversityContext);

    const [state, setState] = useState<State>({
        courses: [],
        loading: true,
        addedCourses: []
    });

    useEffect(() => {
        const schoolId = 'carleton';
        // @ts-ignore
        firebase.getCourses().on('value', snapshot => {
            const coursesObject = snapshot.val();

            if (coursesObject) {
                let courseList = Object.keys(coursesObject).map(key => ({
                    ...coursesObject[key],
                    uid: key,
                }));

                courseList = courseList.filter((course, index) => course.schoolid === schoolId);

                console.log('here');
                setState({
                    courses: courseList,
                    loading: false,
                    addedCourses: state.addedCourses
                });

            } else {
                setState({
                    courses: [],
                    loading: true,
                    addedCourses: state.addedCourses
                });
            }
        });
    }, []);

    const removeCourse = (id: string) => {
        let newCourses = [...state.addedCourses];
        let indexToRemove = null;

        newCourses.forEach((course, index) => {
            if(course.uid === id) {
                indexToRemove = index;
            }
        });

        if(indexToRemove != null && indexToRemove > -1) {
            newCourses.splice(indexToRemove, 1);
        }

        setState({
            courses: state.courses,
            loading: state.loading,
            addedCourses: newCourses
        });
    }

    const addCourse = (course: CourseModel) => {
        if(state.addedCourses.includes(course)) {
            return
        }

        const newAddedCourses = [...state.addedCourses];
        newAddedCourses.push(course);

        setState({
            courses: state.courses,
            loading: state.loading,
            addedCourses: newAddedCourses
        });
    }

    return (
        <>
            <h1>Schedules</h1>
            <div className={classes.Landing}>
                <TimeTables removeCourse={removeCourse} courses={state.addedCourses}/>
                <Card variant="outlined" classes={cardStyles}>
                    <CardHeader title='Courses' classes={classesCard}/>
                    <CourseSearch  addCourse={addCourse} courses={state.courses} loading={state.loading}/>
                </Card>
            </div>
        </>);
}

export default withFirebase(Landing);