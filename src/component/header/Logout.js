import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  Button } from '@material-ui/core';
import auth from '../util/firebase';

const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "inherit",
        }
    }
});

class Logout extends Component {

    handleLogout = () => {
        auth.signOut().then( authUser => {
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
                <Button variant="outlined" size="small" onClick={this.handleLogout} className={classes.sectionDesktop}>Logout</Button>
            </React.Fragment>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Logout);