import React, { Component, Fragment } from 'react';
import Navbaroo from '../../components/Navbar/Navbar';
import axios from 'axios';
import { Card, Drawer, Elevation, Button, Dialog, InputGroup } from "@blueprintjs/core";
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
      toggleDrawer: false,
      toggleNewClass: false,
      name: '',
      email: '',
      office: ''
    }
    this.clickCard = this.clickCard.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.clickNewClass = this.clickNewClass.bind(this);
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
  submitNewProf() {
    console.log('submit new prof')
        axios.post(`/prof`, {
            name: this.state.name,
            email: this.state.email,
            office: this.state.office,
        }, {
          headers: {'token': this.props.auth.token}
        })
        .then(res => {
          console.log(res)
        
        })
        .catch(function (error) {
          console.log(JSON.stringify(error))
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
  clickNewClass() {
    this.setState({
      toggleNewClass: true
    })
  }
  toggle() {
    this.setState({
      toggleDrawer: null
    })
  }
  toggleClass() {
    this.setState({
      toggleNewClass: false
    })
  }

  render() {
    const loggedIn = this.props.auth.state.loggedIn
      return (
      loggedIn ?
      (
      <Fragment>
          <Navbaroo />
          {this.props.auth.state.token ? 
            (
              <div className="btnContainer">
                <Button
                  onClick={() => this.clickNewClass()}
                >
                  Add New Professor
                </Button>
              </div>
            ) :
            ('')
          }
          <Dialog
            isOpen={this.state.toggleNewClass}
            onClose={() => this.toggleClass()}
            canOutsideClickClose={true}
          >
            <div className="drawerContainer">
              <h1>Add New Professor</h1>
              <InputGroup
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={this.state.name}
                  style={{ marginTop: '1em'}}
                  placeholder='Name'
                  type='text'
              />
              <InputGroup
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                  style={{ marginTop: '1em'}}
                  placeholder='Email'
                  type="text"
              />
              <InputGroup
                  onChange={(e) => this.setState({ office: e.target.value })}
                  value={this.state.office}
                  style={{ marginTop: '1em'}}
                  placeholder='Office'
                  type="text"
              />
             

              <Button
                style={{ marginTop: '1em' }}
                onClick={() => this.submitNewProf()}
                fill
              >
                Add New Professor
              </Button>

            </div>
            
          </Dialog>
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