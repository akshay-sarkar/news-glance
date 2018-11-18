import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { AppContext } from '../util/AppContext';

export default class SlideMenu extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Menu>
              {context.state.sections.map((section, index) => (
                <a className="menu-item" href="/" key={index}>
                  {section}
                </a>
              ))}
              </Menu>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}
