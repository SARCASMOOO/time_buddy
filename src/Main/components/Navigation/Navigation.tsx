import React from "react";
import {pure} from 'recompose';

// Styles
import classes from './Navigation.module.scss';

// Components
import Dropdown from "./Dropdown/Dropdown";

const NavItems = () => (
    <nav className={classes.navigation__nav_items}>
        {['Login', 'Sign Up', 'Time Table'].map((navItem: string) => <h1 key={navItem}>{navItem}</h1>)}
    </nav>
);

const NavList = () => {
    return (
        window.innerWidth < 400 ? (
            <div className={classes.navigation__dropdown}>
                <Dropdown/>
            </div>
        ) : (
            <div className={classes.navigation__desktop}>
                <NavItems/>
            </div>
        ));
}

const Navigation = (props: {}) => (
    <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
            <h2>Time Buddy</h2>
        </div>
        <NavList/>
    </div>);

export default pure(Navigation);
// TODO: Make a react hook to monitor screen width to choose
//  which component to render based on screen size.

