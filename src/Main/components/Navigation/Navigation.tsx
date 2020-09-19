import React from "react";

// Styles
import classes from './Navigation.module.scss';

// Components
import Dropdown from "./Dropdown/Dropdown";

// Hooks
import useResponsive from "../../Hooks/useResponsive";

// Models
import {ScreenType} from '../../Hooks/useResponsive';

const NavItems = () => (
    <nav className={classes.navigation__nav_items}>
        {['Login', 'Sign Up', 'Time Table'].map((navItem: string) => <h1 key={navItem}>{navItem}</h1>)}
    </nav>
);

const NavList = () => {
    const screenType = useResponsive();

    if (screenType === ScreenType.mobile) {
        return (
            <div className={classes.navigation__dropdown}>
                <Dropdown/>
            </div>
        )
    }

    return (
        <div className={classes.navigation__desktop}>
            <NavItems/>
        </div>
    )
}


const Navigation = (props: {}) => (
    <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
            <h2>Time Buddy</h2>
        </div>
        <NavList/>
    </div>);

export default Navigation;

