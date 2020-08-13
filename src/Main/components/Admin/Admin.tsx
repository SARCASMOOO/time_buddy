import React, { Component } from 'react';

import Firebase, { withFirebase } from '../Firebase';

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
        this.setState({ loading: true });

        // @ts-ignore
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            if(usersObject) {
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
        const { users, loading } = this.state;

        return (
            <div>
                <h1>Admin</h1>

                {loading && <div>Loading ...</div>}

                <UserList users={users} />
            </div>
        );
    }
}

interface UserListProps {
    users: [];
}

const UserList = ({users} : UserListProps) => {
    return (<ul>
        {users.map((user: any) => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
        </span>
            </li>
        ))}
    </ul>);
}

export default withFirebase(AdminPage);