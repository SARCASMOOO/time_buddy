import React, {Component} from "react";
import Timetable from './TimeTable/TimeTable';

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
    courses: CourseModel[];
    removeCourse: (id: string) => void;
}

interface State {
    events: Object;
}

interface TableEvent {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    day: string;
}

// const eventss = [
//     {
//         id: '1',
//         title: 'COMP 4001',
//         startTime: '9:00 AM',
//         endTime: '1:00 PM',
//         day: 'Saturday'
//     },
//     {
//         id: '2',
//         title: 'COMP 4001',
//         startTime: '1:30 PM',
//         endTime: '9:00 PM',
//         day: 'Saturday'
//     },
//     {
//         id: '3',
//         title: 'COMP 4001',
//         startTime: '1:30 PM',
//         endTime: '9:00 PM',
//         day: 'Sunday'
//     }
// ];

class TimeTables extends Component<Props, State> {
    createEvent = (course: CourseModel) => {
        const days = course.Days.split(',');
        let day = '';

        if(days && days.length > 0) {
            day = days[0];
        }

        return {
            id: course.uid,
            title: course.Title,
            startTime: course.StartTime,
            endTime: course.EndTime,
            day: day
        };
    }

    transformCourseToEvent = (courses: CourseModel[]) => {
        const events: TableEvent[] = [];

        courses.forEach((course) => {
            const event = this.createEvent(course);
            if(event.day) {
                events.push(event);
            }
        })
        console.log('Courses: ', courses.length);
        console.log(events);
        return events;
    }

    render() {
        const courses = this.props.courses;
        const events = this.transformCourseToEvent(courses);

        return (<div style={{width: '85%'}}>
            <Timetable removeCourse={this.props.removeCourse} events={events}/>
        </div>);
    }
};

export default TimeTables;