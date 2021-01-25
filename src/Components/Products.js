import React from 'react';

import {makeStyles} from '@material-ui/core';
import { Outlet } from 'react-router-dom';

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


const Products = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Outlet />
        </div>
    );
};

export default Products;