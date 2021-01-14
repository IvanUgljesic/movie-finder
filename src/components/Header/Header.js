import React from 'react';
import useStyles from './styles';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import logo from '../../images/logo.svg';

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={4} className={classes.root} direction="column">
            <CardMedia
                className={classes.logo}
                component="img"
                alt="www.themoviedb.org"
                image={logo}
                title="www.themoviedb.org"
            />
            <Typography variant="h5" gutterBottom>Movie Finder</Typography>
        </Grid>
    )
};

export default Header;