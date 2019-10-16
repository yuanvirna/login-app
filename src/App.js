import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './container/dashboard';
import HomePage from './container/HomePage';
import SignUp from './container/SignUp';
import Login from './container/login';

class App extends Component {
  state = {
    isLoading: true,
    isLogin: false
  };
  componentDidMount() {
    const checkStatusFromStorage = localStorage.getItem('sudah login');
    if (checkStatusFromStorage === null) {
      this.setState({
        isLogin: false
      });
    } else {
      this.setState({
        isLogin: true
      });
    }
  }
  render() {
    return (
      <div>
        <Switch>
          {this.state.isLogin === true && (
            <Route path="/dashboard" exact component={Dashboard} />
          )}
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
