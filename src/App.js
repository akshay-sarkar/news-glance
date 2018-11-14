import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
/* Importing Context */
import { AppProvider } from './constants/AppContext';

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
});

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

                <BrowserRouter>
                  <div>
                    <Header />
                    {/* <Navigation /> */}
                    {/* <Route
                      exact path={routes.SIGN_UP}
                      component={SignUp}
                    /> */}

                    {/* <Route
                      exact path={routes.LANDING}
                      component={SignUp}
                    /> */}

                  </div>
                </BrowserRouter>

              </div>

            </React.Fragment>

          </div>
        </MuiThemeProvider>
      </AppProvider>
    );
  }
}

export default withStyles(style)(App);