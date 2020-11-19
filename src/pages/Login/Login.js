import React, { Component } from 'react';
import GoogleLoginButton from '../../components/GoogleAuth/GoogleLoginButton'
import {
    Redirect
  } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'


import './Login.css'


const Login = (props) => {

    const loggedIn = props.auth.state.loggedIn
    return (
        loggedIn ?
            (<Redirect to="/classes" />)
            :
            (
            <div className="loginContainer">
                <GoogleLoginButton 
                    loginSuccess={props.auth.loginSuccess}
                />
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