import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './container/dashboard';
import HomePage from './container/HomePage';
import SignUp from './container/SignUp';
import Login from './container/login';
import Profile from './container/profile';
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
        {this.state.isLogin === true ? (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard}></Route>
            <Redirect to="/dashboard" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/profile" exact component={Profile}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
