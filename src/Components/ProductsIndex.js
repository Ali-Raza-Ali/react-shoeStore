import { makeStyles, Paper, Tooltip, Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const ProductsIndex = () => {
    
    const classes = useStyles();
    const shoes = {
    "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
        name: "JORDAN MARS 270",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-force-1":{
        name: "AIR FORCE 1",
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2ecf8356-5995-4d40-9822-1f56231b99af/air-force-1-07-lv8-mens-shoe-90Qb3W.jpg"
    }
};

    return (
        <div className={classes.root}style={{minHeight:"85vh",overflow:"scroll"}}>
        
            <ul style={{textAlign:"center"}}> 
                {Object.entries(shoes).map(([productID, { name, img }]) => (   
                    
                    <li key={productID} style={{ display: "inline-block",marginRight:"20px"}}>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Tooltip title="Click to see more details">
                                <Paper className={classes.paper} spacing={3} style={{marginTop:"25vh"}} elevation={3}>
                                    <Link to={`/Products/${productID}`} style={{textDecoration: "None",color:"black"}} >
                                        <Typography variant="h6">{name}</Typography>
                                        <img src={img} alt={name} style={{width:"200px",height:"200px"}} />
                                    </Link>
                                </Paper>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            
        </div>
    );
}

export default ProductsIndex;