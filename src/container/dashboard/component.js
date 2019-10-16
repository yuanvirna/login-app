import React from 'react';
import Table from '../../component-dashboard/table';
import Drawer from '../../component-dashboard/drawer';
import { Grid } from '@material-ui/core';

class component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={0}>
          <Grid items xs={2}>
            <Drawer />
          </Grid>
          <Grid items xs={10}>
            <Table />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default component;
