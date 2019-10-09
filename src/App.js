import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SignUp from './Signup';
import MenuAppBar from './header';
import Gallery from './Gallery';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import Nav from './NAv';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="xl">
      <Router>
      <Nav />
      <div style={{marginTop:50}}>
      {/* <MenuAppBar /> */}
      
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/signin" component={Login} />
        <Route path="/contact" component={Contact} />
        {/* <PrivateRoute path="/" component={Signup} /> */}
      </div>
    </Router>
      
        <Copyright />
        
    </Container>
  );
}
