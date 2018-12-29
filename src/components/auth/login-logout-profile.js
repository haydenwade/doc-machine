import React from 'react';
import { isLoggedIn, getUserProfile, login, logout } from './auth-service';

class AuthLoginProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        if(isLoggedIn()){
            getUserProfile().then(x => {
                this.setState({ picture: x.picture, nickname: x.nickname });
            })
        }
    }
    login() {
        login('/');
    }
    logout() {
        logout('/');
    }
    render() {
        if (isLoggedIn()) {
            return (
                <div>
                    <span onClick={this.logout}>Logout </span>
                    {/* <Image src={this.state.picture} circle height={20} /> */}
                </div>
            )
        }
        else {
            return (<span onClick={this.login}>Login</span>)
        }
    }
}
export default AuthLoginProfile;
