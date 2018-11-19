import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { AppContext } from '../util/AppContext';
import Link from "react-router-dom/Link";

export default class SlideMenu extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Menu>
              {context.state.sections.map((section, index) => (
                 <Link to={section} className="menu-item" key={section}>
                    {section}
                  </Link>            
              ))}
              </Menu>
            </React.Fragment>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}
