import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Button, Typography, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
/* React Route Dom*/
import SignUp from './SignUp';
import Logout from './Logout';
import SignIn from './SignIn';
/* Importing Context */
import { AppContext } from '../util/AppContext';
/* Authentication */
import auth from '../util/firebase';


const styles_header = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbarMain: {
    borderBottom: '1px solid black',
  },
  toolbarTitle: {
    flex: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit"
    }
  },
  sectionMobile: {
    display: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

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
      } else {
        this.context.updateUserData(null);
        console.log('not authorized');
      }
    })
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {

    const { classes } = this.props;

    return (
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div className={classes.sectionDesktop}>
              <Toolbar className={classes.toolbarMain}>
                <Button size="small">Subscribe</Button>

                <Typography variant="h5" color="inherit" align="center" noWrap
                  className={classes.toolbarTitle}> NEWS GLANCE </Typography>

                <IconButton>
                  <SearchIcon />
                </IconButton>

                {context.state.userData ? <Logout ></Logout> : <React.Fragment><SignUp></SignUp><SignIn></SignIn></React.Fragment>}

              </Toolbar>
            </div>
            <div className={classes.sectionMobile}>
              <Toolbar className={classes.toolbarMain}>
                <Typography variant="h5" color="inherit" align="right" noWrap
                  className={classes.toolbarTitle}> NEWS GLANCE </Typography>    
                
              </Toolbar>
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

/* Context Passing */
Header.contextType = AppContext;

export default withStyles(styles_header)(Header)