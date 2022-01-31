import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function FormDialog({open,handleClose,data,onChange,handleFormAdd}) {
 const {id,sportName, addPossition}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update user":"Add Sport"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="sportName" value={sportName} onChange={e=>onChange(e)} placeholder="Enter sportName" label="sportName" variant="outlined" margin="dense" fullWidth />
             <TextField id="addPossition" value={addPossition} onChange={e=>onChange(e)} placeholder="Enter addPossition" label="addPossition" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormAdd()} variant="contained">
            {id?"Update":"Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
