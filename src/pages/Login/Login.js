import React, { Component } from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import GoogleLoginButton from '../../components/GoogleAuth/GoogleLoginButton';
import {
    Redirect
  } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer';
import {
    Row, Col, Container
} from 'react-bootstrap';


import './Login.css'


const Login = (props) => {

    const loggedIn = props.auth.state.loggedIn
    return (
        loggedIn ?
            (<Redirect to="/classes" />)
            :
            (
            <div className="loginContainer">
                <Container>
                    <Row>
                        <Col>
                            <div className="LandingTextWrapper">
                                <h1 className="LandingText">Final Project</h1>
                            </div>
                            
                        </Col>
                        <Col>
                            <Card className="loginCard" elevation={Elevation.TWO}>
                                <GoogleLoginButton 
                                    loginSuccess={props.auth.loginSuccess}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
        
    )
}


export default props => {
    return (
      <Subscribe to={[AuthContainer]}>
        {(a) => <Login auth = {a}/>}
      </Subscribe>
    )
  }