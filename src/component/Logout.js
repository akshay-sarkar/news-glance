import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  Button } from '@material-ui/core';
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
        return (
            <React.Fragment>                
                <Button variant="outlined" size="small" onClick={this.handleLogout}>Logout</Button>
            </React.Fragment>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Logout);