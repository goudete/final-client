import React, { Component } from 'react';
import { Card, Elevation, InputGroup, Button } from "@blueprintjs/core";
import GoogleLoginButton from '../../components/GoogleAuth/GoogleLoginButton';
import {
    Redirect
  } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer';

import './Login.css'


const Login = (props) => {

    const loggedIn = props.auth.state.loggedIn
    return (
        loggedIn ?
            (<Redirect to="/classes" />)
            :
            (
            <div className="loginContainer">

                <div className="col">
                    <div className="landingText">
                        <span className="textz">Final Project</span>
                    </div> 
                </div>
                
                <div className="col">
                    <Card className="loginCard" elevation={Elevation.TWO}>
                        <h3>Login to see next semester's CS classes</h3>
                        <div className="googlebtn">
                            <GoogleLoginButton 
                                loginSuccess={props.auth.loginSuccess}
                                
                            />
                        </div>
                        <hr />
                        <p style={{marginTop: "1em"}}>Or, login as the admin</p>
                        <InputGroup
                            onChange={(e) => props.auth.handleUsername(e.target.value)}
                            value={props.auth.username}
                            style={{ marginTop: '1em'}}
                            placeholder='username'
                        />
                        <InputGroup
                            onChange={(e) => props.auth.handlePass(e.target.value)}
                            value={props.auth.password}
                            style={{ marginTop: '1em'}}
                            placeholder='password'
                        />
                        <Button
                            onClick={props.auth.handleSubmit}
                            style={{ marginTop: '1em'}}
                        >
                            Login
                        </Button>

                        

                    </Card>
                </div>

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