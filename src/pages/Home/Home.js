import React, { Component, Fragment } from 'react';
import Navbaroo from '../../components/Navbar/Navbar';
import axios from 'axios';
import { Card, Elevation } from "@blueprintjs/core";

import './Home.css'

class Home extends React.Component {
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
      return (
      <Fragment>
          <Navbaroo />
          <div className="HomeContainer">
            {this.state.classes.map((c) => (
              <div className="flexItem">

                <Card className="classesCard" interactive={true} elevation={Elevation.TWO}>
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                </Card>

              </div>
            ))}
          </div>
      </Fragment>
      
    );
  }
}
export default Home
