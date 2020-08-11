import React, {ReactNode} from "react";

// Styles
import classes from './Layout.module.css';

// Interfaces
interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => (<div className={classes.Layout}>{children}</div>);

export default Layout;