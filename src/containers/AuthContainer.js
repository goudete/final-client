import { Container } from 'unstated'
import axios from 'axios';

class AuthContainer extends Container {
    
    state = {
        loggedIn: false,
        username: null,
        password: null,
        token: null
    }
    
    
    loginSuccess = () => {
        console.log('login Success!')
        this.setState({ loggedIn: true })
    }

    logoutSuccess = () => {
        console.log('logout success')
        this.setState({ 
            loggedIn: false,
            username: null,
            password: null,
            token: null
        })
    }

    handleUsername = (usr) => {
        this.setState({ username: usr })
    }

    handlePass = (pass) => {
        this.setState({ password: pass })
    }
    handleSubmit = () => {
        console.log('handle submit')
        axios.post(`/login`, {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
        const token = res.data.token;
        if (token) {
            this.setState({ 
                token: token,
                loggedIn: true
             });
        }
        })
    }


}

export default AuthContainer