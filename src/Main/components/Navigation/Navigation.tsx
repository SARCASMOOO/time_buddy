import React from "react";

// Styles
import classes from './Navigation.module.scss';

// Components
import Dropdown from "./Dropdown/Dropdown";

const Navigation = (props: {}) => (
    <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
            <h2>Time Buddy</h2>
        </div>
        <div className={classes.navigation__dropdown}>
            <Dropdown />
        </div>
    </div>);

export default Navigation;


