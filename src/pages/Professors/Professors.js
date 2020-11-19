import React, { Component, Fragment } from 'react';
import Navbaroo from '../../components/Navbar/Navbar';
import axios from 'axios';
import { Card, Elevation } from "@blueprintjs/core";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'
import {
  Redirect
} from "react-router-dom";

import './Professors.css'

class Professors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [],
      profs: []
    }
    
  }

  componentDidMount() {
    axios.get(`/class`)
    .then(res => {
      const classes = res.data;
      if (classes) {
        this.setState({ classes: classes.courses });
      }
    })

    axios.get(`/prof`)
    .then(res => {
      const profs = res.data;
      if (profs) {
        this.setState({ profs: profs.profs });
      }
    })
  }

  render() {
    const loggedIn = this.props.auth.state.loggedIn

      return (
        loggedIn ?
        (
          <Fragment>
              <Navbaroo />
              <div className="HomeContainer">
                {this.state.profs.map((c) => (
                  <div className="flexItem">

                    <Card className="classesCard" interactive={true} elevation={Elevation.TWO}>
                      <h3>{c.name}</h3>
                      <p>{c.description}</p>
                    </Card>

                  </div>
                ))}
              </div>
          </Fragment>
        ) :
        (
          <Redirect to="/" />
        )
    );
  }
}

export default props => {
  return (
    <Subscribe to={[AuthContainer]}>
      {(a) => <Professors auth = {a}/>}
    </Subscribe>
  )
}
