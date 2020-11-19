import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'
// refresh token

class GoogleLoginButton extends Component {
    constructor(props) {
        super(props);
        
    }

    failure(res) {
        alert('[Login failed] res:', res)
    }

    render() {
        const clientId = '243667955570-4ejh3h1lcbdjb383qvgo0ttedor09ocf.apps.googleusercontent.com'

        return (
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText={'Login with Google'}
                    onSuccess={this.props.auth.loginSuccess}
                    onFailure={this.failure}
                    redirectUri={'http://localhost/classes'}
                />
            </div>

        )
    }
}

export default props => {
    return (
      <Subscribe to={[AuthContainer]}>
        {(a) => <GoogleLoginButton auth = {a}/>}
      </Subscribe>
    )
}