import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from "react-router-dom";
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/AuthContainer'
// refresh token

class GoogleLogoutButton extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const clientId = '243667955570-4ejh3h1lcbdjb383qvgo0ttedor09ocf.apps.googleusercontent.com'

        return (
            <div>
                <GoogleLogout
                    clientId={clientId}
                    buttonText={'Logout'}
                    onLogoutSuccess={this.props.auth.logoutSuccess}
                />
            </div>

        )
    }
}


export default props => {
    return (
      <Subscribe to={[AuthContainer]}>
        {(a) => <GoogleLogoutButton auth = {a}/>}
      </Subscribe>
    )
}