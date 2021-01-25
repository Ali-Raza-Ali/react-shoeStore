import React from 'react';
import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 350,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    padding:'5%',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Contact = () => {
    const classes = useStyles();
    return (
       <div className={classes.root} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>  
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    <Grid key={0} item>
                        <Paper className={classes.paper} elevation={3} >
                            <form  action="" method="get">
                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                                 <br/>

                              </FormControl>
                              <FormControl>

                                <InputLabel htmlFor="my-input">Message</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Enter your message</FormHelperText>
                                <br/>
                                <Button variant="contained" color="primary" onClick="submit" type="submit" value="submit">
                                    Primary
                                </Button>   
                            </FormControl>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
