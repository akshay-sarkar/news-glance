import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider  extends Component {
    state = {
        userData : {
          username: '',
          user: null // <-- add this line
        }      
    }
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppContext, AppProvider} ;