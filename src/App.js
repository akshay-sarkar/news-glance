import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/header/Header';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SlideMenu from './component/categoryMenu/SlideMenu';

/* Importing Context */
import { AppProvider } from './component/util/AppContext';
import { AppContext } from './component/util/AppContext';
import Headlines from './component/mainContent/Headlines';
import CategoryMenu from './component/categoryMenu/CategoryMenu';

// Create theme based on mode
const getTheme = (mode) => createTheme({
  palette: {
    type: mode,
    primary: {
      main: mode === 'dark' ? '#90caf9' : '#1976d2',
    },
    secondary: {
      main: mode === 'dark' ? '#f48fb1' : '#dc004e',
    },
    background: {
      default: mode === 'dark' ? '#303030' : '#fff',
      paper: mode === 'dark' ? '#424242' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.54)',
    },
  },
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
  sectionMobile: {
    display: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppProvider>
        <AppContext.Consumer>
          {(context) => {
            // Get the current theme mode from context
            const currentTheme = getTheme(context.state.themeMode);

            return (
              <MuiThemeProvider theme={currentTheme}>
                <div className={`App ${context.state.themeMode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                  <React.Fragment>
                    {/* Reset.css */}
                    <CssBaseline />

                    <Router>
                      <>
                        <div className={classes.sectionMobile}>
                          <SlideMenu></SlideMenu>
                        </div>

                        <div className={classes.layout}>
                          <Header />
                          <CategoryMenu sections={context.state.sections}></CategoryMenu>
                          <Routes>
                            {context.state.sections.map((section, index) => (
                              <Route path={'/' + section} element={<Headlines context={context} />} key={index} />
                            ))}
                            <Route path="*" element={<Headlines context={context} />} />
                          </Routes>
                        </div>
                      </>
                    </Router>
                  </React.Fragment>
                </div>
              </MuiThemeProvider>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}

export default withStyles(style)(App);
