import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Button, TextField } from '@material-ui/core';
import { DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';
import auth from './Authentication/firebase';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

const INITIAL_STATE = {
    username: 'akshays',
    email: 'akshay.sarkar.dbit@gmail.com',
    password: 'akshays',
    confirmPassword: 'akshays',
    error: null,
    success: null
};


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, ...INITIAL_STATE };
        this.signup = this.signup.bind(this);
        //this.auth = firebase.auth();
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendEmail = authUser =>{
        this.setState({ 'success': 'An email is sent for verification.' });
        authUser.user.sendEmailVerification().then(function () {
            console.log("email verification sent to user");
        }).catch(error => {
            console.log('failure');
            this.setState({ 'error': error });
        });
    };

    signup(event){
        const {
            username,
            email,
            password,
        } = this.state;

            auth.createUserWithEmailAndPassword(email, password).then( authUser => {
                console.log('sucess', authUser);
                this.setState({ ...INITIAL_STATE });
                if (authUser && authUser.user.emailVerified === false) {
                    this.sendEmail(authUser);
                }
            })
            .catch(error => {
                console.log('faliure');
                this.setState({ 'error': error });
            });

        event.preventDefault();
    }

    render() {
        const { classes } = this.props;

        const {
            username,
            email,
            password,
            confirmPassword,
            error,
            success
        } = this.state;

        const isInvalid = password !== confirmPassword || password === '' ||
            email === '' || username === '';

        return (
            <div>
                <Button variant="outlined" size="small" onClick={this.handleOpen}>Sign up</Button>
                <Dialog
                    aria-labelledby="auth-modal-title"
                    open={this.state.open}
                    onClose={this.handleClose} >
                    <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            Signup to create customize news feed.
                        </DialogContentText>
                        <form autoComplete="on" onSubmit={this.signup}>
                            <TextField required id="username-input" label="Username" className={classes.textField}
                                margin="normal" value={username} onChange={this.handleChange('username')} fullWidth />

                            <TextField required id="email-address-input" label="Email Address" className={classes.textField}
                                margin="normal" value={email} onChange={this.handleChange('email')} fullWidth />

                            <TextField required id="password-input" label="Password" className={classes.textField}
                                type="password" margin="normal" fullWidth
                                value={password} onChange={this.handleChange('password')} />

                            <TextField required id="confirm-password-input" label=" Confirm Password" className={classes.textField}
                                type="password" margin="normal" fullWidth
                                value={confirmPassword} onChange={this.handleChange('confirmPassword')} />
                            <Button onClick={this.handleClose} color="primary"> Cancel </Button>
                            <Button color="primary" disabled={isInvalid} type="submit"> SignUp </Button>

                            {error && <p>{error.message}</p>}
                            {success && <p>{success.message}</p>}
                        </form>
                    </DialogContent>

                    {/* <DialogActions>
                        <Button onClick={this.handleClose} color="primary"> Cancel </Button>
                        <Button onClick={this.signup} color="primary" disabled={isInvalid}> SignUp </Button>
                    </DialogActions> */}

                </Dialog>
            </div>
        )
    }
}
SignUp.propTypes = {
    onUserChange: PropTypes.func
}
export default withStyles(styles, { withTheme: true })(SignUp);