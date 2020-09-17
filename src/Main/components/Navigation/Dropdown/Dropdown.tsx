import React, {useState} from "react";

// Styles
import classes from './Dropdown.module.scss';

const Dropdown = (props: {}) => {
    const toggleDropDown = () => setOpen(prevState => !prevState);
    const [isOpen, setOpen] = useState<boolean>(false);

    let dropDownIconStyles = [classes.dropdown__icon];
    dropDownIconStyles.push(isOpen ?  classes.dropdown__icon__open : '')

    return (<div className={classes.dropdown}>
        <div className={dropDownIconStyles.join(' ')} onClick={toggleDropDown}>
            <hr className={classes.dropdown__bar_first}/>
            <hr className={classes.dropdown__bar_second}/>
            <hr className={classes.dropdown__bar_third}/>
        </div>

        <nav className={classes.dropdown__nav}>I am the NAV!</nav>
    </div>);
}

export default Dropdown;

