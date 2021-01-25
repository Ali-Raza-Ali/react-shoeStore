
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import './style.css';
import { Button } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Ali-Raza-Ali">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      color:'black'
  },
  signInButton: {
    textTransform: "none",
    width: "0%",
    backgroundColor: "#e8e8e8",
  }
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="footer" position="sticky" style={{justifyContent:'center', textAlign:'center', height:"20vh",width:"100%"}}>
            <CssBaseline />
            <footer className={classes.footer} >
                <Container maxWidth="sm">
                <Typography variant="body1">My sticky footer can be found here.</Typography>
                <Button 
                  variant="link"
                  color="default"
                  className={classes.signInButton}
                  startIcon={<FacebookIcon />} href="https://www.facebook.com/alirazaaliqadri1/" />
                <Button 
                  variant="link"
                  color="default"
                  className={classes.signInButton}
                  startIcon={<GitHubIcon />} href="https://github.com/Ali-Raza-Ali" />
                  
                <Copyright />
                </Container>
            </footer>
        </div>
    );
};

export default Footer;