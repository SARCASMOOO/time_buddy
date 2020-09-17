import React from "react";

// Styles
import classes from './Navigation.module.scss';

const Navigation = (props: {}) => (
    <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
            <h2>Time Buddy</h2>
        </div>
        <div className={classes.navigation__dropdown}><h2>DropDown</h2></div>
    </div>);

export default Navigation;


