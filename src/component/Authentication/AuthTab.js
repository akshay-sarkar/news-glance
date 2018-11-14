import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
//         {children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired
// };

const styles = theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//   },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class AuthTab extends React.Component {

  state = {
    value: 0,
    email: '',
    password: 'Controlled',
    confirmPassword: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   handleChangeIndex = index => {
//     this.setState({ value: index });
//   };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
        <React.Fragment>
      {/* //<div> */}
        {/* <AppBar position="static" color="default">
          <Tabs value={0} onChange={this.handleChange} fullWidth >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar> */}

        {/* {value === 0 && <TabContainer dir={theme.direction}> */}
            <form className={classes.container} noValidate autoComplete="off">
                <TextField required id="email-address-input" label="Email Address" className={classes.textField}  
                margin="normal" value={this.state.email} onChange={this.handleChange('email')} fullWidth/>

                <TextField required id="password-input" label="Password" className={classes.textField}
                    type="password" margin="normal" fullWidth
                    value={this.state.password} onChange={this.handleChange('password')} />

                <TextField required id="confirm-password-input" label="Password" className={classes.textField}
                    type="password"   margin="normal"  fullWidth
                    value={this.state.confirmPassword} onChange={this.handleChange('confirmPassword')}  />
            </form>
          {/* </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>} */}


        {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            
            <form className={classes.container} noValidate autoComplete="off">
                <TextField required id="email-address" label="Email Address" defaultValue="" margin="normal"
                    className={classes.textField} value={this.state.email} onChange={this.handleChange('email')}/>

                <TextField required id="standard-password-input" label="Password" className={classes.textField}
                    type="password" margin="normal" />

                <TextField required id="confirm-password-input" label="Confirm Password" className={classes.textField}
                    type="password"  margin="normal" />
            </form>
          
          </TabContainer>

          <TabContainer dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews> */}
      </React.Fragment>
    );
  }
}

AuthTab.propTypes = {
  //classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AuthTab);