import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  dialog: {
    opacity: 0.97
  }
});

function WinnerAlert(props) {
    
  const classes = useStyles();

  return (
        <div>
          <Dialog
            open={props.show}
            onClose={() => props.newGame()}
            className={classes.dialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{props.winnerAnnouncement}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Player's score:</TableCell>
                        <TableCell align="center">Computer's score:</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">{props.playerScore}</TableCell>
                        <TableCell align="center">{props.computerScore}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
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
