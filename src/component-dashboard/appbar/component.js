import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import LogoutButton from '../../component-autentifikasi/logout-button';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <LogoutButton />
        </Toolbar>
        <Typography className={classes.title}>@Dashboard</Typography>
      </AppBar>
    );
  }
}

export default component;
