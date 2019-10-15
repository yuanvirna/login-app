import React from 'react';
import { Button } from '@material-ui/core';

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button className={classes.Button} type="submit">
        Save
      </Button>
    );
  }
}

export default component;
