import React from "react";

// Styles
import classes from './DropdownItem.module.scss';

interface Props {
    navItem: string
}

const DropdownItem = ({navItem}: Props) => {
    return <li className={classes.dropdownItem}>{navItem}</li>
}

export default DropdownItem;



