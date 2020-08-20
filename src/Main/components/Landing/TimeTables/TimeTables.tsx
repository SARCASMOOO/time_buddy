import React, {Component} from "react";
import styles from './TimeTables.module.css';
import Timetable from './TimeTable/TimeTable';
import moment from "moment";

interface Props {}

interface State {
    events: Object;
}

class TimeTables extends Component<Props, State> {
    render() {
        return (<div style={{width: '85%'}}>
            <Timetable />
        </div>);
    }
};

export default TimeTables;