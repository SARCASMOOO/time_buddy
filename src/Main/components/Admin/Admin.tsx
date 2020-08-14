import React, {Component, Fragment} from 'react';

import Firebase, {withFirebase} from '../Firebase';
import {Accordion, AccordionDetails, AccordionSummary, CircularProgress, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
    firebase: Firebase;
}

interface State {
    loading: boolean;
    users: [];
}

class AdminPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        // @ts-ignore
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            if (usersObject) {
                const usersList = Object.keys(usersObject).map(key => ({
                    ...usersObject[key],
                    uid: key,
                }));

                // @ts-ignore
                this.setState({
                    users: usersList,
                    loading: false,
                });
            } else {
                this.setState({
                    users: [],
                    loading: false,
                });
            }
        });
    }

    componentWillUnmount() {
        // @ts-ignore
        this.props.firebase.users().off();
    }

    render() {
        const {users, loading} = this.state;

        return (
            <div>
                <h1>Admin</h1>
                {loading ? <CircularProgress />: <UserList users={users}/>}
            </div>
        );
    }
}

interface UserListProps {
    users: [];
}

const UserList = ({users}: UserListProps) => {
    const output = users.map((user: any) => (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography>Email: {user.email}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <span>ID: {user.uid}</span>
                    <span style={{display: 'block', marginTop: '15px'}}>Username: {user.username}</span>
                </Typography>
            </AccordionDetails>
        </Accordion>
    ))

    return (
        <div>
            <h3>Users List</h3>
            {output}
        </div>);
}

export default withFirebase(AdminPage);
