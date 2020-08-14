import React, {Component} from 'react';

import Firebase, {withFirebase} from '../Firebase';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

interface Props {
    firebase: Firebase;
}

interface State {
    passwordOne: string;
    passwordTwo: string;
    error: any;
}

class PasswordChangeForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event: any) => {
        const {passwordOne} = this.state;

        const promise = this.props.firebase.doPasswordUpdate(passwordOne);

        if (promise) {
            promise.then(() => {
                this.setState({...INITIAL_STATE});
            }).catch((error: any) => {
                this.setState({error});
            });
        }

        event.preventDefault();
    };

    onChange = (event: any) => {
        // @ts-ignore
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {passwordOne, passwordTwo, error} = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

        return (
            <div style={{marginLeft: '25px', marginTop: '10%'}}>
                <h2>Change Password</h2>
                <div style={{display: 'flex', flexDirection: 'row', width: 'auto'}}>
                    <FormControl>
                        <Input name="passwordOne"
                               id="new-password"
                               value={passwordOne}
                               onChange={this.onChange}
                               type="password"
                               placeholder="New Password"
                               style={{marginRight: '20px'}}
                        />
                    </FormControl>

                    <FormControl>
                        <Input name="passwordTwo"
                               id="old-password"
                               value={passwordTwo}
                               onChange={this.onChange}
                               type="password"
                               placeholder="Confirm New Password"
                        />
                    </FormControl>
                </div>
                <Button
                    style={{width: '200px', marginTop: '20px'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                    disabled={isInvalid}
                >
                    Reset My Password
                </Button>

                {error && <p>{error.message}</p>}
            </div>

        );
    }
}

export default withFirebase(PasswordChangeForm);