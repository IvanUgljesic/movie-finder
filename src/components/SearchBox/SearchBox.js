import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Grid, TextField, withStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setPage } from '../../actions/movies'

//RxJS
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      color: 'white',
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const SearchBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const page = useSelector(state => state.movies.page);
    const [search, setSearch] = useState({
      title:'',
      year:'',
      actors:'',
      page: page
    });
    const [onSearch$] = useState(()=>new Subject());

    useEffect(() => {
      const subscription = onSearch$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(a => a())
      ).subscribe();
    }, [onSearch$])

    useEffect(() => {
      let params = {
        ...search,
        page: page
      }
      onSearch$.next(() => dispatch(fetchMovies(params)))
    }, [page])

    const handleChange = (e) => {
      dispatch(setPage(1));
      let name = e.target.name;
      setSearch(s => {
        return {
          ...s,
          [name]:e.target.value
        }
      });
      let temp = { ...search, [name]:e.target.value}
      onSearch$.next(() => dispatch(fetchMovies(temp)))
    }

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={6} md={4} align="center">   
              <CssTextField
                autoComplete='off'
                label="Title"
                variant="outlined"
                name="title"
                onChange={handleChange}
                value={search.title}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} align="center">    
              <CssTextField
                autoComplete='off'
                label="Year"
                variant="outlined"
                name="year"
                onChange={handleChange}
                value={search.year}
              />
            </Grid>
        </Grid>
      </div>  
    )
};

export default SearchBox;