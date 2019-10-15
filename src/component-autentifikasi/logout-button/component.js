import React from 'react';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
  handlelogout = () => {
    localStorage.removeItem('sudah login');
    setTimeout(() => {
      window.location.href = '/login';
    }, 500);
  };
  render() {
    const { classes } = this.props;
    return (
      <Button
        color="primary"
        onClick={this.handlelogout}
        className={classes.Button}
      >
        Logout
      </Button>
    );
  }
}

export default Component;
