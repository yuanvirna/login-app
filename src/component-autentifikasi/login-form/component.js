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

class Component extends React.Component {
  Toggle = () => {
    var temp = document.getElementById('txtPass');
    if (temp.type === 'password') {
      temp.type = 'text';
    } else {
      temp.type = 'password';
    }
  };
  handleLogin = () => {
    var txtEmail = document.getElementById('txtEmail');
    var txtPass = document.getElementById('txtPass');
    if (
      txtEmail.value == '' ||
      txtPass.value == '' ||
      txtEmail.value === undefined ||
      txtPass.value == undefined
    ) {
      alert('harap isi password dan email');
    } else {
      var checkUser = User.find(
        i =>
          i.account.email === txtEmail.value &&
          i.account.password === txtPass.value
      );
      if (checkUser) {
        localStorage.setItem('sudah login', 'true');
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } else {
        alert('password atau email salah');
      }
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent className={classes.CardContent}>
            <List>
              <ListItem>
                <Input
                  label="email"
                  id="txtEmail"
                  className={classes.textField}
                  margin="normal"
                  placeholder="Your email..."
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  }
                />
              </ListItem>
              <ListItem>
                <Input
                  type={'password'}
                  id="txtPass"
                  margin="normal"
                  placeholder="your password goes here..."
                  inputProps={{
                    'aria-label': 'description'
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                />
              </ListItem>
              <ListItem>
                <Typography>
                  <input type="checkbox" onClick={this.Toggle} />
                  Show Password
                </Typography>
              </ListItem>
              <ListItem>
                <Button
                  color="primary"
                  aria-label="outlined primary button group"
                  onClick={this.handleLogin}
                  className={classes.ButtonLogin}
                >
                  Login
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
