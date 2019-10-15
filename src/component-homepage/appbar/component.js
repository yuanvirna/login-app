import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoImage from '../../asset/2.png';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <a href="/dashboard" alt="go to dashboard">
            <img src={LogoImage} className={classes.LogoImage} />
            <p />
          </a>
          <Typography className={classes.titleLogo}>
            {' '}
            Click the Logo and Go To Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default component;