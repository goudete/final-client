import React, { Component, Fragment } from 'react';
import Navbaroo from '../../components/Navbar/Navbar';
import axios from 'axios';
import { Card, Drawer, Elevation } from "@blueprintjs/core";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'
import {
  Redirect
} from "react-router-dom";

import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: [],
      profs: [],
      classDetails: null,
      toggleDrawer: false
    }
    this.clickCard = this.clickCard.bind(this);
    this.toggle = this.toggle.bind(this);
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
  clickCard(id) {
    axios.get(`/class/${id}`)
    .then(res => {
      const classDetails = res.data;
      if (classDetails) {
        this.setState({ 
          classDetails: classDetails.course[0],
          toggleDrawer: true
        });
      }
    })
  }
  toggle() {
    this.setState({
      toggleDrawer: null
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
            {this.state.classes.map((c) => (
              <div className="flexItem">

                <Card className="classesCard" interactive={true} elevation={Elevation.TWO} onClick={() => this.clickCard(c.id)}>
                  <h3>{c.name}</h3>
                  <p>{ c.description.length > 350 ? (c.description.substring(0, 350) + '...') : (c.description) }</p>
                  <div className="infoContainer">
                    <div className="flexItem">
                      <h5>{c.classroom}</h5>
                    </div>
                    <div className="flexItem">
                    <h5>{c.days}</h5>
                    </div>
                    <div className="flexItem">
                      <h5>{c.start}-{c.over}</h5>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <Drawer
            isOpen={this.state.toggleDrawer}
            onClose={this.toggle}
          >
            <div className="drawerContainer">
              <h1>{this.state.classDetails && this.state.classDetails.name}</h1>
              <h4>{this.state.classDetails && this.state.classDetails.description}</h4>
              <div className="drawerInfoContainer">
                <div className="flexItem">
                  <h3>{this.state.classDetails && this.state.classDetails.classroom}</h3>
                </div>
                <div className="flexItem">
                  <h3>{this.state.classDetails && this.state.classDetails.days}</h3>
                </div>
                <div className="flexItem">
                  <h3>{this.state.classDetails && this.state.classDetails.start } - {this.state.classDetails && this.state.classDetails.over }</h3>
                  
                </div>
              </div>
            </div>
          
          </Drawer>

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
      {(a) => <Home auth = {a}/>}
    </Subscribe>
  )
}