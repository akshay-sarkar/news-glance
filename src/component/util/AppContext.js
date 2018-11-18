import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider  extends Component {
    state = {
        age: 100,
        userData : null,
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
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                }),
                updateUserData : (user) => this.setState({
                    userData : user
                })
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppContext, AppProvider} ;