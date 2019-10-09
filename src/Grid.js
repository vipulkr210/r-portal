import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import FolderIcon from '@material-ui/icons/Folder';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function generate(element) {
    return [0, 1, 2,3,4,5].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
export default function FullWidthGrid() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={5} style={{marginTop:5}}>
        <Grid item xs={12}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
            Notice
        </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="NEW - Students from 4th till Graduation are eligible for this exam."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>

        
        <Grid item xs={12} sm={6}>
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
            Notice
        </Typography>
        <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="NEW - Students from 4th till Graduation are eligible for this exam."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
      </Paper>
        </Grid>
        <Grid item xs={12} sm={6} >
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
          Test Series
        </Typography>
        <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="NEW - Students from 4th till Graduation are eligible for this exam."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
      </Paper>
          
          
        </Grid>
        <Grid item xs={6} sm={4}>
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
         Contact Us
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
        </Grid>
       
        <Grid item xs={6} sm={4}>
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
          Admit Card
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
          Scholarship
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
        </Grid>

        <Grid item xs={12}>
        <Typography variant="h5" component="h3" style={{background:"rgb(7, 97, 177)",color:"#fff"}}>
            Bottom
        </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="NEW - Students from 4th till Graduation are eligible for this exam."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}