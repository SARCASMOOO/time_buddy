import React, {useState} from "react";

// Styles
import classes from './Dropdown.module.scss';

// Components
import DropdownItem from "./DropdownItem/DropdownItem";

interface NavItemsProps {
    navItems: string[];
}

const NavItems = ({navItems}: NavItemsProps) => (<nav className={classes.dropdown__nav}>
    <ul>
        {navItems.map((navItem) => <DropdownItem navItem={navItem}/>)}
    </ul>
</nav>);

const Dropdown = (props: {}) => {
    const toggleDropDown = () => setOpen(prevState => !prevState);
    const [isOpen, setOpen] = useState<boolean>(false);
    const navItems = ['Log In', 'Sign Up', 'Time Table'];

    let dropDownIconStyles = [classes.dropdown__icon];
    dropDownIconStyles.push(isOpen ? classes.dropdown__icon__open : '')

    return (<div className={classes.dropdown}>
        <div className={dropDownIconStyles.join(' ')} onClick={toggleDropDown}>
            <hr className={classes.dropdown__bar_first}/>
            <hr className={classes.dropdown__bar_second}/>
            <hr className={classes.dropdown__bar_third}/>
        </div>
        {isOpen ? <NavItems navItems={navItems}/> : null}
    </div>);
}

export default Dropdown;

