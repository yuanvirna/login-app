import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PhoneIcon from '@material-ui/icons/Phone';
import Input from '@material-ui/core/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputAdornment from '@material-ui/core/InputAdornment';
import RoomIcon from '@material-ui/icons/Room';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import ButtonSave from '../../SaveButton';
import MailIcon from '@material-ui/icons/Mail';

class component extends React.Component {
  // state = { name };
  // handleChange = name => {
  //   this.setState({ name: name.target.value });
  // };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.Card}>
        {/* <CardContent className={classes.CardContent}> */}
        <Typography className={classes.title}>Create My Account</Typography>
        {/* </CardContent> */}
        <CardContent className={classes.CardContent}>
          <List>
            <ListItem>
              <Input
                placeholder="Your name..."
                className={classes.input}
                inputProps={{
                  'aria-label': 'description'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonAddIcon />
                  </InputAdornment>
                }
                // onchange={this.handleChange()}
                name="name"
              />
            </ListItem>
            <ListItem>
              <Input
                placeholder="Description about me.."
                className={classes.input}
                inputProps={{
                  'aria-label': 'description'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FormatAlignLeftIcon />
                  </InputAdornment>
                }
              />
            </ListItem>
            <ListItem>
              <Input
                placeholder="I live in .. "
                className={classes.input}
                inputProps={{
                  'aria-label': 'description'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                }
              />
            </ListItem>
            <ListItem>
              <Input
                placeholder="Your Address.."
                className={classes.input}
                inputProps={{
                  'aria-label': 'description'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <RoomIcon />
                  </InputAdornment>
                }
              />
            </ListItem>
            <ListItem>
              <Input
                placeholder="your email goes here..."
                className={classes.input}
                inputProps={{
                  'aria-label': 'description'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    );
  }
}

export default component;
