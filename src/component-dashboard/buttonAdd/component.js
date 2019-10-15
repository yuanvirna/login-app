import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import Input from '@material-ui/core/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputAdornment from '@material-ui/core/InputAdornment';
import RoomIcon from '@material-ui/icons/Room';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';

const emails = [];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  // const handleListItemClick = value => {
  //   onClose(value);
  // };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      align="center"
    >
      <DialogTitle id="simple-dialog-title">Form</DialogTitle>
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
      </List>
      <Button color="primary">Simpan</Button>
    </Dialog>
  );
}

function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
export default SimpleDialogDemo;
