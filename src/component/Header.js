import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/* React Route Dom*/
import SignUp from './SignUp';
import SignIn from './SignIn';
/* Importing Context */
import { AppContext } from '../constants/AppContext';

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const styles_header = {
  toolbarMain: {
    borderBottom: '1px solid brown',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  }
};

class Header extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <AppContext.Consumer>
      {(context) => (
      <React.Fragment>
          <Toolbar className={classes.toolbarMain}>
            <Button size="small">Subscribe</Button>

            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              News Glance
          </Typography>

            <IconButton>
              <SearchIcon />
            </IconButton>

            {context.state.userData.user ? <SignIn></SignIn> : <SignUp></SignUp>}

          </Toolbar>

          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
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

export default withStyles(styles_header)(Header)
