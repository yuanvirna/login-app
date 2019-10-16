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
  GridListTileBar,
  List,
  ListItemIcon
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
              <List>
                <ListItemIcon className={classes.ListItemIcon}>
                  <ButtonAdd />
                  <ButtonDelete />
                </ListItemIcon>
              </List>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default component;
