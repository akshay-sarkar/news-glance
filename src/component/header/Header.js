import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Typography }from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
/* React Route Dom*/
import SignUp from './SignUp';
import Logout from './Logout';
import SignIn from './SignIn';
/* Importing Context */
import { AppContext } from '../util/AppContext';
/* Authentication */
import auth from '../util/firebase';


const styles_header = {
  toolbarMain: {
    borderBottom: '1px solid brown',
  },
  toolbarTitle: {
    flex: 1,
  }
};

class Header extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //this.setState({user});
        console.log(this.context);
        this.context.updateUserData(user);
        console.log('user is set state..');
      }else{
        this.context.updateUserData(null);
        console.log('not authorized');
      }
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <AppContext.Consumer>
      {(context) => (
      <React.Fragment>
          <Toolbar className={classes.toolbarMain}>
            <Button size="small">Subscribe</Button>

            <Typography component="h2" variant="h5" color="inherit" align="center" noWrap 
            className={classes.toolbarTitle}> News Glance </Typography>

            <IconButton>
              <SearchIcon />
            </IconButton>

            {context.state.userData ? <Logout></Logout> : <React.Fragment><SignUp></SignUp><SignIn></SignIn></React.Fragment>}

          </Toolbar>
      </React.Fragment>
      )}
      </AppContext.Consumer>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

Header.contextType = AppContext;

export default withStyles(styles_header)(Header)
