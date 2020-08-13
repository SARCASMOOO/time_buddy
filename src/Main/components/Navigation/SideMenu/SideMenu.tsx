import React, {ReactNode, Fragment} from 'react';
import clsx from 'clsx';

// Styles
import {makeStyles} from '@material-ui/core/styles';

// Components
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from 'react-router-dom';

// Constants
import * as ROUTES from '../../../constants/routes';
import Firebase, {withFirebase} from "../../Firebase";

type Anchor = 'left';

interface Props {
    children: ReactNode;
    authUser: any;
    firebase: Firebase;
}

const SideMenu = ({children, firebase, authUser}: Props) => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {['Time Buddy'].map((text, index) => (
                    <ListItem style={{width: '300px'}} button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {authUser ? <NavigationAuth firebase={firebase}/> : <NavigationNonAuth />}
            </List>
        </div>
    );

    return (
        <div>
            {(['left'] as Anchor[]).map((anchor) => (
                <Fragment key={anchor}>
                    <Button style={{color: "white"}} onClick={toggleDrawer(anchor, true)}>
                        {children}
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </div>
    );
}

interface NavProps {
    firebase: Firebase;
}

const NavigationAuth = ({firebase}: NavProps) => (
    <Fragment>
        <ListItem component={Link} to={ROUTES.LANDING} style={{width: '300px'}} button key={ROUTES.LANDING}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Landing'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.HOME} style={{width: '300px'}} button key={ROUTES.HOME}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Home'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.ACCOUNT} style={{width: '300px'}} button key={ROUTES.ACCOUNT}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Account'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.LANDING}
                  style={{width: '300px'}}
                  button
                  key={ROUTES.LANDING}
                  onClick={firebase.doSignOut}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Sign Out'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.ADMIN} style={{width: '300px'}} button key={ROUTES.ADMIN}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Admin'/>
        </ListItem>
    </Fragment>
);

const NavigationNonAuth = () => (
    <Fragment>
        <ListItem component={Link} to={ROUTES.LANDING} style={{width: '300px'}} button key={ROUTES.LANDING}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Landing'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.SIGN_IN} style={{width: '300px'}} button key={ROUTES.SIGN_IN}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Sign In'/>
        </ListItem>
        <ListItem component={Link} to={ROUTES.SIGN_UP} style={{width: '300px'}} button key={ROUTES.SIGN_UP}>
            <ListItemIcon>{0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
            <ListItemText primary='Sign Up'/>
        </ListItem>
    </Fragment>
);


export default withFirebase(SideMenu);