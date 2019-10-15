import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TableChartIcon from '@material-ui/icons/TableChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          // anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List className={classes.List}>
            <ListItem className={classes.ListItem}>
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText>
                  <a href="/">My Account</a>
                </ListItemText>
              </ListItem>
            </ListItem>
            <ListItem className={classes.ListItem}>
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <EqualizerIcon />
                </ListItemIcon>
                <ListItemText>Chart</ListItemText>
              </ListItem>
            </ListItem>
            <ListItem className={classes.ListItem}>
              <ListItem button>
                <ListItemIcon className={classes.icon}>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText>Table</ListItemText>
              </ListItem>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default component;
