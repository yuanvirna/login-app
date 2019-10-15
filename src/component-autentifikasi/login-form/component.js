import React from 'react';
import User from '../../data-dummy/database';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid } from '@material-ui/core';
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
        alert('password  email salah');
      }
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Input
          label="email"
          id="txtEmail"
          className={classes.textField}
          margin="normal"
          // id="txtEmail"
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
        <Input
          type="password"
          // label="password"
          id="txtPass"
          className={classes.textField}
          margin="normal"
          // id="txtPassword"
          placeholder="your password goes here..."
          className={classes.input}
          inputProps={{
            'aria-label': 'description'
          }}
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          }
        />
        <input type="checkbox" onClick={this.Toggle} /> <b>Show</b>
        <Button onClick={this.handleLogin} className={classes.ButtonLogin}>
          Login
        </Button>
      </div>
    );
  }
}

export default Component;
