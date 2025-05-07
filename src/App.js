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

const theme = createTheme({
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
        <MuiThemeProvider theme={theme}>
          <div className="App">
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
                    <AppContext.Consumer>
                      {(context) => (
                        <React.Fragment>
                          <CategoryMenu sections={context.state.sections}></CategoryMenu>
                          <Routes>
                            {context.state.sections.map((section, index) => (
                              <Route path={'/' + section} element={<Headlines context={context} />} key={index} />
                            ))}
                            <Route path="*" element={<Headlines context={context} />} />
                          </Routes>
                        </React.Fragment>
                      )}
                    </AppContext.Consumer>

                  </div>
                </>
              </Router>
            </React.Fragment>
          </div>
        </MuiThemeProvider>
      </AppProvider>
    );
  }
}

export default withStyles(style)(App);
