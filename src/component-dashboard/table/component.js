import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonAdd from '../buttonAdd';
import ButtonDelete from '../buttonDelete';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  GridListTileBar
} from '@material-ui/core';
import Axios from 'axios';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Table className={classes.Table}>
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell className={classes.TableCellManage}>Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Grid container spacing={0} className={classes.Grid}>
                <Grid item>
                  <ButtonAdd />
                </Grid>
                <Grid item>
                  <ButtonDelete />
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default component;
