import React from "react";
import {pure} from 'recompose';

// Styles
import classes from './Navigation.module.scss';

// Components
import Dropdown from "./Dropdown/Dropdown";

const NavList = () => {
    const Items = ['Login', 'Sign Up', 'Time Table22'].map((navItem: string) => <h1 key={navItem}>{navItem}</h1>);
    return (<div>{Items}</div>);
}

const Navigation = (props: {}) => (
    <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
            <h2>Time Buddy</h2>
        </div>
        <div className={classes.navigation__dropdown}>
            {/* FIXME: This doesn't work if you start on desktop then resize down. */}
            {window.innerWidth < 460 ? <Dropdown/> : <NavList/>}
        </div>
    </div>);

export default pure(Navigation);
// TODO: Make a react hook to monitor screen width to choose
//  which component to render based on screen size.

