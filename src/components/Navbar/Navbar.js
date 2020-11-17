import React, { Component } from 'react';
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Menu, MenuDivider, MenuItem, Popover, Position, } from "@blueprintjs/core"
import {
    Link
  } from "react-router-dom";

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

        <Navbar.Heading>Final Project</Navbar.Heading>

        </Navbar.Group>
        
        <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/classes">
                <Button className="bp3-minimal" icon="learning" text="Classes" />
            </Link>
            <Link to="/profs">
                <Button className="bp3-minimal" icon="predictive-analysis" text="Professors" />
            </Link>
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default Navbaroo;