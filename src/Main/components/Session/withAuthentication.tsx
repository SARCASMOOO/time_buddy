import React from 'react';

import AuthUserContext from './context';
import Firebase, { withFirebase } from '../Firebase';

interface Props {
    firebase: Firebase;
}

interface State {
    authUser: any;
    listener?: any;
}

const withAuthentication = (Component: React.ElementType) => {
    class WithAuthentication extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);

            this.state = {
                authUser: undefined,
            };
        }

        componentDidMount() {
            const listener = this.props.firebase.auth.onAuthStateChanged(
                (authUser:any) => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                },
            );

            this.setState({listener: listener});
        }

        componentWillUnmount() {
            const listener = this.state.listener;
            if (listener) listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;