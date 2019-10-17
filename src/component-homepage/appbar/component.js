import React from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoImage from '../../asset/2.png';

class component extends React.Component {
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
    const { classes } = this.props;
    return (
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <a href="/dashboard" alt="go to dashboard">
            <img src={LogoImage} className={classes.LogoImage} />
            <p />
          </a>
          {this.state.isLogin === true ? (
            <Button href="/dashboard" className={classes.titleLogo}>
              dashboard
            </Button>
          ) : (
            <Button href="/login" className={classes.titleLogo}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default component;
