import React from 'react';
import AppBar from '../../component-dashboard/appbar';
import Table from '../../component-dashboard/table';
// import ButtonAdd from '../../component/buttonAdd';
import Drawer from '../../component-dashboard/drawer';
import { Grid } from '@material-ui/core';
// import ApexChart from '../../component-dashboard/cart-multiple-Y-Axis';
// import { Grid } from '@material-ui/core';
class component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Grid container spacing={0}>
          <Grid items xs={2}>
            <Drawer />
          </Grid>
          <Grid items xs={10}>
            <Table />
          </Grid>
        </Grid>
        {/* <ApexChart /> */}
      </React.Fragment>
    );
  }
}

export default component;
