import React from "react";

// Styles
import classes from './Navigation.module.css';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import SideMenu from "./SideMenu/SideMenu";
import SelectSchool from "./SelectSchool/SelectSchool";

// Interfaces
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Navigation = ({}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{height: '100%', backgroundColor: '#02baa8'}} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideMenu> <MenuIcon /> </ SideMenu >
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Time Buddy
                    </Typography>
                    <SelectSchool/>
                </Toolbar>
            </AppBar>
        </div>);
}

export default Navigation;


