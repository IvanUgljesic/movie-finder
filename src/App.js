import React from 'react';
import useStyles from './styles';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import MovieList from './components/Movie/MovieList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#999'
      },
    },
    typography: {
      fontFamily: [
        'Vesper Libre', 
        'sans-serif',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
      ].join(','),
      "fontSize": 18,
      "fontWeightLight": 400,
      "fontWeightRegular": 500,
      "fontWeightMedium": 600,
    }
  });
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <SearchBox />
          <MovieList />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
