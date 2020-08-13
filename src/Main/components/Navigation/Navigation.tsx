import React from "react";

// Styles
import classes from './Navigation.module.css';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import SideMenu from "./SideMenu/SideMenu";
import SelectSchool from "./SelectSchool/SelectSchool";

// Interfaces
interface Props {
    authUser: any;
}

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

const Navigation = ({authUser}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{height: '100%', backgroundColor: '#02baa8'}} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SideMenu authUser={authUser}> <MenuIcon /> </ SideMenu >
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Logo
                    </Typography>
                    <SelectSchool/>
                </Toolbar>
            </AppBar>
        </div>);
}

export default Navigation;


