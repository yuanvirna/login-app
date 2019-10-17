import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyle } from './style';
import { ListItem, ListItemIcon, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

function ResponsiveDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handlelogout = () => {
    localStorage.removeItem('sudah login');
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // className={classes.IconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Dashboard Responsive</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List></List>
        <Divider />
        <List>
          <ListItem>
            <Button href="/profile">
              <ListItemIcon>
                <AccountCircleSharpIcon />
              </ListItemIcon>
              My Profile
            </Button>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Button href="/">
              <ListItemIcon>
                <HomeSharpIcon />
              </ListItemIcon>
              Go To HomePage
            </Button>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Button onClick={handlelogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              Log out
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
export default ResponsiveDrawer;
