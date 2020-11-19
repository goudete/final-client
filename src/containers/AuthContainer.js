import { Container } from 'unstated'

class AuthContainer extends Container {
    
    state = {
        loggedIn: false
    }
    
    
    loginSuccess = () => {
        console.log('login Success!')
        this.setState({ loggedIn: true })
    }

    logoutSuccess = () => {
        console.log('logout success')
        this.setState({ loggedIn: false })
    }


}

export default AuthContainer