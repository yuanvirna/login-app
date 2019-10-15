import React from 'react';
import ButtonDelete from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
class component extends React.Component {
  render() {
    return (
      <ButtonDelete
        onClick={item => {
          if (window.confirm('Apakah anda benar ingin mengapus data ini?'))
            this.onCancel(item);
        }}
      >
        <DeleteIcon />
      </ButtonDelete>
    );
  }
}

export default component;
