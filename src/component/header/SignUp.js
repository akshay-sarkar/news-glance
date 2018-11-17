import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Button, TextField } from '@material-ui/core';
import { DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';
import auth from '../util/firebase';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "inherit",
        }
    }
});

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
    success: null
};


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, ...INITIAL_STATE };
        this.signup = this.signup.bind(this);
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
            email,
            password,
            confirmPassword,
            error,
            success
        } = this.state;

        const isInvalid = password !== confirmPassword || password === '' || email === '';

        return (
            <React.Fragment>
                <Button size="small" onClick={this.handleOpen} className={classes.sectionDesktop}>Sign up</Button>
                <Dialog
                    aria-labelledby="auth-modal-title"
                    open={this.state.open}
                    onClose={this.handleClose} >
                    <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                    <form autoComplete="on" onSubmit={this.signup}>
                    <DialogContent>
                        <DialogContentText>
                            Signup to create customize news feed.
                        </DialogContentText>                        
                            <TextField required id="email-address-input" label="Email Address" className={classes.textField}
                                margin="normal" value={email} onChange={this.handleChange('email')} fullWidth />

                            <TextField required id="password-input" label="Password" className={classes.textField}
                                type="password" margin="normal" fullWidth
                                value={password} onChange={this.handleChange('password')} />

                            <TextField required id="confirm-password-input" label=" Confirm Password" className={classes.textField}
                                type="password" margin="normal" fullWidth
                                value={confirmPassword} onChange={this.handleChange('confirmPassword')} />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary"> Cancel </Button>
                        <Button color="primary" disabled={isInvalid} type="submit"> SignUp </Button>
                    </DialogActions>
                    {error && <p>{error.message}</p>}
                    {success && <p>{success.message}</p>}
                    </form>
                </Dialog>
            </React.Fragment>
        )
    }
}
SignUp.propTypes = {
    onUserChange: PropTypes.func
}
export default withStyles(styles, { withTheme: true })(SignUp);