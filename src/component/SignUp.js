import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Button, TextField } from '@material-ui/core';
import { DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core';


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

class SignUp extends Component {

    state = {
        open: false,
        email: '',
        password: '',
        confirmPassword: '',
    };

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
    
    render() {
        const { classes } = this.props;
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

                    <form noValidate autoComplete="off">
                        <TextField required id="email-address-input" label="Email Address" className={classes.textField}  
                        margin="normal" value={this.state.email} onChange={this.handleChange('email')} fullWidth/>

                        <TextField required id="password-input" label="Password" className={classes.textField}
                            type="password" margin="normal" fullWidth
                            value={this.state.password} onChange={this.handleChange('password')} />

                        <TextField required id="confirm-password-input" label="Password" className={classes.textField}
                            type="password"   margin="normal"  fullWidth
                            value={this.state.confirmPassword} onChange={this.handleChange('confirmPassword')}  />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary"> Cancel </Button>
                    <Button onClick={this.handleClose} color="primary"> SignUp </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(SignUp);