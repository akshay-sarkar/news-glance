import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/header/Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';

/* Importing Context */
import { AppProvider } from './component/util/AppContext';
import Headlines from './component/mainContent/Headlines';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

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
  toolbarSecondary: {
    justifyContent: 'space-between'
  },
  linkDecoration: {
    textDecoration: 'none',
    color: 'black'
  }
});


const sections = [
  'Headlines',
  'Business',
  'Technology',
  'Sports',
  'Entertainment',
  'Science',
  'Health'
];

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppProvider>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <React.Fragment>
              {/* Reset.css */}
              <CssBaseline />

              <div className={classes.layout}>
                <Header />

                <Router>

                  <div>
                    <Toolbar variant="dense" className={classes.toolbarSecondary}>
                      {sections.map(section => (
                        <Link to={section} className={classes.linkDecoration}>
                          <Typography color="inherit" noWrap key={section}>
                            {section}
                          </Typography>
                        </Link>
                      ))}
                    </Toolbar>
                    <Switch>
                      {sections.map((section, index) => (
                        <Route path={'/' + section} component={props => <Headlines />} key={index} />
                      ))}
                      <Route>
                        <Redirect to="/Headlines" path="/" />
                      </Route>
                    </Switch>
                  </div>
                </Router>
              </div>
            </React.Fragment>
          </div>
        </MuiThemeProvider>
      </AppProvider>
    );
  }
}

export default withStyles(style)(App);