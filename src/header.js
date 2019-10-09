import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SignUp from './Signup';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
        {/* <Link to="/home">  */}
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <MenuIcon />
          </IconButton>
          {/* </Link> */}
          <Typography variant="h6" className={classes.title}>
          <Link to="/home"  className={classes.link}>About Us</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/contact" className={classes.link}>Contact Us</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/syllabus" className={classes.link}>Syllabus</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/gallery"  className={classes.link}>Gallery</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/signup" className={classes.link}>Admit Card</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/signup" className={classes.link}>Apply</Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                
                <MenuItem onClick={handleClose}><Link to="/signin">Login</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/signup">Signup</Link></MenuItem>
              </Menu>
              
             



            </div>
          )}
        </Toolbar>
        
      </AppBar>


    </div>
  );
}