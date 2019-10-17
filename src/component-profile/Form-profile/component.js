import React from 'react';
import User from '../../data-dummy/database';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import ImageAvatarProfile from '../../asset/2.png';
class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent className={classes.CardContent}>
            <img src={ImageAvatarProfile} className={classes.avatar} />
            <Typography className={classes.title}>My Profile</Typography>
            <List>
              <ListItem>
                <Button className={classes.Button}>
                  <PostAddOutlinedIcon />
                </Button>
              </ListItem>
              <ListItem>
                <Input
                  className={classes.textField}
                  margin="normal"
                  placeholder="Your email..."
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="end">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  }
                />

                <Button className={classes.Button}>
                  <EditOutlinedIcon />
                </Button>
                <Button className={classes.Button}>
                  <ClearOutlinedIcon />
                </Button>
              </ListItem>
              <ListItem>
                <Input
                  margin="normal"
                  placeholder="your password goes here..."
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="end">
                      <LockIcon />
                    </InputAdornment>
                  }
                />
                <Button className={classes.Button}>
                  <EditOutlinedIcon />
                </Button>
                <Button className={classes.Button}>
                  <ClearOutlinedIcon />
                </Button>
              </ListItem>
              <ListItem>
                <Input
                  className={classes.textField}
                  margin="normal"
                  placeholder="Your email..."
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="end">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  }
                />

                <Button className={classes.Button}>
                  <EditOutlinedIcon />
                </Button>
                <Button className={classes.Button}>
                  <ClearOutlinedIcon />
                </Button>
              </ListItem>
              <ListItem>
                <Input
                  className={classes.textField}
                  margin="normal"
                  placeholder="Your email..."
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="end">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  }
                />

                <Button className={classes.Button}>
                  <EditOutlinedIcon />
                </Button>
                <Button className={classes.Button}>
                  <ClearOutlinedIcon />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  aria-label="outlined primary button group"
                  className={classes.title}
                  href="/dashboard"
                >
                  Cancel
                </Button>
                <Button
                  aria-label="outlined primary button group"
                  className={classes.title}
                >
                  Save
                </Button>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default Component;
