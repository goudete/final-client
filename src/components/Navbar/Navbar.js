import React, { Component } from 'react';
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import GoogleLogoutButton from '../GoogleAuth/GoogleLogoutButton'
import { Menu, MenuDivider, MenuItem, Popover, Position, } from "@blueprintjs/core"
import {
    Link
  } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'


import './Navbar.css'
import GoogleLogin from 'react-google-login';


class Navbaroo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
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
            <GoogleLogoutButton />
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default props => {
  return (
    <Subscribe to={[AuthContainer]}>
      {(a) => <Navbaroo auth = {a}/>}
    </Subscribe>
  )
}