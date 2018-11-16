import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';
import auth from '../util/firebase';

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
    email: 'akshay.sarkar.dbit@gmail.com',
    password: 'akshays',
    error: null,
    success: null
};

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, ...INITIAL_STATE };
        this.signin = this.signin.bind(this);
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

    signin = event => {
        const {
            email,
            password,
        } = this.state;

        auth.signInWithEmailAndPassword(email, password).then( authUser => {
            console.log('sucess', authUser);
            this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
            console.log('faliure');
            this.setState({ 'error': error });
        });

        event.preventDefault();
    };

    render() {

        const { classes } = this.props;
        const {
            email,
            password,
            error,
            success
        } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <React.Fragment>
                <Button size="small" onClick={this.handleOpen}>Sign In</Button>
                <Dialog
                    aria-labelledby="auth-modal-title"
                    open={this.state.open}
                    onClose={this.handleClose} >
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                    <form autoComplete="on" onSubmit={this.signin}>
                    <DialogContent>
                        <DialogContentText>
                            SignIn to read your customize news feed.
                        </DialogContentText>                        
                            <TextField required id="email-address-input" label="Email Address" className={classes.textField}
                                margin="normal" value={email} onChange={this.handleChange('email')} fullWidth />

                            <TextField required id="password-input" label="Password" className={classes.textField}
                                type="password" margin="normal" fullWidth
                                value={password} onChange={this.handleChange('password')} />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary"> Cancel </Button>
                        <Button color="primary" disabled={isInvalid} type="submit"> SignIn </Button>
                    </DialogActions>
                    {error && <p>{error.message}</p>}
                    {success && <p>{success.message}</p>}
                    </form>
                </Dialog>
            
            </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SignIn);