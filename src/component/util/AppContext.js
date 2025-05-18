import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider  extends Component {
    state = {
        age: 100,
        userData : null,
        countryEdition:'us',
        themeMode: 'light', // Add theme mode state
        refreshArticles: false, // Flag to trigger article refresh
        newsData: {
            Headlines: [],
            Business: [],
            Technology: [],
            Sports: [],
            Entertainment: [],
            Science:[],
            Health:[]
        },
        sections : [
            'Headlines',
            'Business',
            'Technology',
            'Sports',
            'Entertainment',
            'Science',
            'Health'
        ]
    }
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                updateNewsData: (key, value) => {
                    let obj = Object.assign({}, this.state.newsData);
                    obj[key] = value;
                    this.setState({ obj });
                },
                changeCountryEdition: (edition) => {
                    this.setState({
                        countryEdition: edition,
                        refreshArticles: true // Set flag to trigger refresh
                    });
                    console.log('edition modified, refreshing articles');
                },
                toggleThemeMode: () => {
                    this.setState(prevState => ({
                        themeMode: prevState.themeMode === 'light' ? 'dark' : 'light'
                    }));
                    console.log('theme mode toggled');
                },
                resetRefreshArticles: () => {
                    this.setState({ refreshArticles: false });
                    console.log('refresh articles flag reset');
                },
                updateUserData: (user) => this.setState({
                    userData : user
                })
            }}>
            {this.props.children}

            </AppContext.Provider>
        )
    }
}

export { AppContext, AppProvider} ;