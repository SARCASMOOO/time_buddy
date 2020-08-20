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
        return (<div style={{width: '800px', height: '600px'}}>
            <Timetable />
        </div>);
    }
};

export default TimeTables;