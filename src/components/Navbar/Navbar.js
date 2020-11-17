import React, { Component } from 'react';
import { Navbar, Alignment } from "@blueprintjs/core";
import { Menu, MenuDivider, MenuItem, Popover, Position, } from "@blueprintjs/core"


import './Navbar.css'


class Navbaroo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Navbar className="Navbar bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <div className="clustrLogo">
            Final Project
          </div>
        </Navbar.Group>
        
        <Navbar.Group align={Alignment.RIGHT}>
          <div className="userName">
            Enrique/Rowan
          </div>
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default Navbaroo;