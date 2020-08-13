import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import AuthUserContext from './context';
import Firebase, { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

interface Props {
    firebase: Firebase;
    history: any;
}

interface State {
    listener: any;
}

const withAuthorization = (condition:any) => (Component: React.ElementType) => {

    class WithAuthorization extends React.Component<Props, State> {
        componentDidMount() {
            const listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );

            this.setState({listener: listener});
        }

        componentWillUnmount() {
            const listener = this.state.listener;
            if(listener) listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose<Props, State>(
        withRouter,
        withFirebase,
    )(WithAuthorization);
};

export default withAuthorization;