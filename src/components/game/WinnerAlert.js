import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function WinnerAlert(props) {
        
    return (
        <div>
          <Dialog
            open={props.show}
            onClose={() => props.newGame()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{props.winnerAnnouncement}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => props.newGame()} 
                    color="primary">
                New Game
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );

}

export default WinnerAlert;
