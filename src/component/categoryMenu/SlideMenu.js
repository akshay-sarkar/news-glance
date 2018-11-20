import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { AppContext } from '../util/AppContext';
import Link from "react-router-dom/Link";
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  btnDesign: {
      color: 'white'
  },
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
    const { classes } = this.props;
    return (
      <div>
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Menu isOpen={false}>
              <Button className={classes.btnDesign} onClick={this.handleOpenSignUp}>Signup</Button>
              <Button className={classes.btnDesign} onClick={this.handleOpenSignIn}>Login</Button>
              <hr/>
              {context.state.sections.map((section, index) => (
                 <Link to={'/'+section} className="menu-item" key={section}>
                    {section}
                  </Link>            
              ))}
              </Menu>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SlideMenu);
