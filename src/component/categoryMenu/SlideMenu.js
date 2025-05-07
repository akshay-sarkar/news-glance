import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { AppContext } from '../util/AppContext';
import {Link} from "react-router-dom";
import { List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import SignUp from '../header/SignUp';
// import SignIn from '../header/SignIn';
// import Logout from '../header/Logout';
import CountryEdition from '../header/CountryEdition';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class SlideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, isOpen: false };
  }

  handleOpenSignUp = () => {
    //close menu as well  
    this.setState({ isOpen: false });
  };

  handleOpenSignIn = () => {
    //close menu as well  
    this.setState({ isOpen: false });
  };
  render() {
    
    return (
      <div>
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Menu isOpen={false}>
                <List component="nav">
                  <CountryEdition context={context} ></CountryEdition>

                  {/* {context.state.userData === null ?
                    <ListItem button onClick={this.handleOpenSignUp}>
                      <SignUp></SignUp>
                    </ListItem> : ''
                  }
                  {context.state.userData === null ?
                    <ListItem button divider onClick={this.handleOpenSignUp}>
                      <SignIn></SignIn>
                    </ListItem>
                    :
                    <ListItem button divider onClick={this.handleOpenSignUp}>
                      <Logout></Logout>
                    </ListItem>
                  } */}

                  <hr />
                  {context.state.sections.map((section, index) => (
                    <ListItem button divider key={section} onClick={this.handleOpenSignUp}>
                      <Link to={'/' + section} className="menu-item" key={section}>
                        <Typography style={{ color: '#FFFFFF', fontSize: '1em' }} key={section}>{section}</Typography>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Menu>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SlideMenu);