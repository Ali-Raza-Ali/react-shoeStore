import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "360px",
    width: "360px",
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    padding:'5%',
    margin:"5vh"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductDetails = () => {
    
    const shoes = {
    "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price:"150$"
    },
    "jordan-mars-270-london": {
        name: "JORDAN MARS 270 LONDON",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price:"200$"
    },
    "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        price:"120$"
    },
     "air-force-1":{
        name: "AIR FORCE 1",
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2ecf8356-5995-4d40-9822-1f56231b99af/air-force-1-07-lv8-mens-shoe-90Qb3W.jpg",
        price:"150$"
    }
};

    const classes = useStyles();
    const {productID} = useParams();
    const product = shoes[productID];
    const {name,img, price} = product;

    return (
        <div className={classes.root} style={{display: 'flex',  justifyContent:'center', alignItems:'center',minHeight:"85vh"}}>  
        
        <Grid item xs={6}>
        <Grid container justify="center" align="center">
            <Grid key={0} item>
              <Paper className={classes.paper} >
                   <Typography variant="h5">{name}</Typography>
                    <img src={img} alt={name} style={{width:"250px", height:"250px"}}/>
                    <Typography variant="h6">{price}</Typography>
              </Paper>
            </Grid>
            <Grid key={1} item>
              <Paper className={classes.paper} style={{textAlign:"justify"}}>
                <Typography variant="body1">
                    Voluptate magna sit ipsum dolor sint proident labore magna voluptate consectetur ad esse. Aliqua do sunt minim labore non qui consequat pariatur incididunt occaecat. Cillum commodo ut cillum consectetur Lorem. Amet sint id non excepteur non amet aute adipisicing amet consectetur. Magna nostrud sunt ullamco magna ut in do reprehenderit eu voluptate quis adipisicing occaecat. Sint laborum Lorem ipsum veniam excepteur. Qui consectetur voluptate ea aute officia adipisicing elit cupidatat.
                </Typography>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
    );
};

export default ProductDetails;