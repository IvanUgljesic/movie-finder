import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from "react-redux";
import MovieSummary from './MovieSummary';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { setPage } from '../../actions/movies'

const MovieList = () => {
    const classes = useStyles();
    const movies = useSelector(state => state.movies.movies);
    const page = useSelector(state => state.movies.page)
    const dispatch = useDispatch();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        movies && setMovieList([...movies.results])
    }, [movies])


    const handleChange = (e, val) => {
        dispatch(setPage(val));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} align="center">
            {
                movieList.length ? movieList.map(movie => {
                    return <MovieSummary key={Math.random()} movie={movie}/>
                }):''
            }
            {movieList.length ?
            <Grid item xs={12}>        
                <Pagination count={movies && movies.total_pages} page={page} onChange={handleChange} variant="outlined" shape="rounded" className={classes.pagination}/>
            </Grid>:''
            }
            </Grid>
        </div>
    )
};

export default MovieList;