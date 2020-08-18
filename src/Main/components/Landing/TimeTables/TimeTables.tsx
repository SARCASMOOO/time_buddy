import React, {Component} from "react";
import styles from './TimeTables.module.css';
import Timetable from './TimeTable/TimeTable';
import moment from "moment";

interface Props {}

interface State {
    events: Object;
}

class TimeTables extends Component<Props, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            events: {
                monday: [
                    {
                        id: 1,
                        name: 'Custom Event 1',
                        startTime: moment('2018-02-23T11:30:00'),
                        endTime: moment('2018-02-23T13:30:00')
                    }
                ],
                tuesday: [
                    {
                        id: 2,
                        name: 'Custom Event 2',
                        startTime: moment('2018-02-22T12:30:00'),
                        endTime: moment('2018-02-22T14:30:00')
                    },
                    {
                        id: 3,
                        name: 'Custom Event 3',
                        startTime: moment('2018-02-22T16:30:00'),
                        endTime: moment('2018-02-22T18:45:00')
                    }
                ],
                wednesday: [],
                thursday: [],
                friday: []
            }
        }
    }
    render() {
        return (<div style={{width: '800px', height: '600px'}}>
            <Timetable classes={this.state.events} />
        </div>);
    }
};

export default TimeTables;