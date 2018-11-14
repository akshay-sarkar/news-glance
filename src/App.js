import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <React.Fragment>
          {/* Reset.css */}
          <CssBaseline />
          <div className={classes.layout}>
            <Header />
          </div>
        </React.Fragment>
        
      </div>
    );
  }
}

export default withStyles(style)(App);
