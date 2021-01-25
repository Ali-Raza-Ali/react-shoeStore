import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
// import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },      
  root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const Header = () => {
    const classes = useStyles();
    const [appBarColor, setColor] = useState('transparent');
    //style={{backgroundColor:"#f69b52", color:"#391900", marginRight:"25%"
    return (
        <AppBar position="sticky" className={classes.root} style={{backgroundColor:`${appBarColor}`, zIndex:"1"}} >
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" color="inherit" noWrap className={classes.title}>
                    Shoe Store | React.js
                </Typography>   
                <nav style={{backgroundColor:"transparent", zIndex:1}}>
                    <Link to='/' className={classes.link} variant="button" onClick={()=>{setColor('transparent')}} color="textPrimary" style={{ color: "white", textDecoration: "None"}}>
                        Home
                    </Link>
                    <Link to='/Products' className={classes.link} variant="button" onClick={()=>{setColor('')}} color="textPrimary" style={{ color: "white", textDecoration: "None" }}>
                        Products
                    </Link>
                    <Link to='/About' className={classes.link} variant="button" onClick={()=>{setColor('')}} color="textPrimary" style={{ color: "white", textDecoration: "None" }}>
                        About
                    </Link>
                    <Link to='/Contact' className={classes.link} variant="button" onClick={()=>{setColor('')}} color="textPrimary" style={{ color: "white", textDecoration: "None" }}>
                        Contact
                    </Link>
                </nav>
            </Toolbar>    
        </AppBar>
    );
};

export default Header;