import React from 'react';
import { login } from './auth-service';

class Login extends React.Component {
  componentDidMount() {
    login(this.props.location.state.from.pathname);
  }

  render() {
    return null;
  }
}

export default Login;