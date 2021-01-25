import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));


const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container spacing={3} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                <Grid item xs={6}>
                    <br />
                    <br />
                    <Paper className={classes.paper}>
                        <Typography variant="h4">About Us</Typography> 
                        <Typography>
                            Hi! This website is about shoe store
                            <br/>Its a kickstart
                        </Typography>
                    </Paper>
                </Grid>    
            </Grid>
            <br />  
        </div>
    );
};

export default About;