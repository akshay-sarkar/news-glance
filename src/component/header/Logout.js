import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import auth from '../util/firebase';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    btnStyling: {
        color: '#FFFFFF',
        fontSize: '1rem',
        [theme.breakpoints.up("md")]: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontSize: '0.8125rem'
        }
    }
});

class Logout extends Component {
    handleLogout = () => {
        auth.signOut().then(authUser => {
            console.log('sucess', authUser);
        })
            .catch(error => {
                console.log('error', error);
            });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Button variant="outlined" size="small" onClick={this.handleLogout} className={classes.btnStyling}>Logout</Button>
            </React.Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Logout);