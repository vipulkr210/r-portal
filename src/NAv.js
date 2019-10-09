import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
    },
    profileLink: {
        color: '#000',
        textDecoration: 'none',
      },
    header: {
        marginLeft: 'auto'
    }
  }));

export default function Nav() {
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
  function loginTabs() {
    if( localStorage.getItem("email") != null) {
      return (
<Link to="/signin"  className={classes.link}><Tab label="SignIn" /></Link>
      );
    }
    else {
      return null;
    }
     ;
  }
    return (
      <AppBar title="My App">
        <Tabs>
          <Link to="/home"  className={classes.link}><Tab label="About Us" /></Link>
          <Link to="/contact"  className={classes.link}><Tab label="Contact Us" /></Link>
          <Link to="/gallery"  className={classes.link}><Tab label="Gallery" /></Link>
          {this.loginTabs().bind(this)}
          <div className={classes.header}>
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
                
                <MenuItem onClick={handleClose}><Link to="/signin" className={classes.profileLink}>Login</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/signup" className={classes.profileLink}>Signup</Link></MenuItem>
              </Menu>
            </div>
        </Tabs>

      </AppBar>
    )
}