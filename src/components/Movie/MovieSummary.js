import React from 'react';
import useStyles from './styles';
import { Card, Grid, IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Container, Box } from '@material-ui/core';

import background from '../../images/background.jpg'
import CloseIcon from '@material-ui/icons/Close';

//modal
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Rating from '@material-ui/lab/Rating';

const MovieSummary = ({movie}) => {
    const classes = useStyles();
    const [showDetails, setShowDetails] = React.useState(false);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const formatDate = (date) => {
      let dateArr = date.split('-');
      return dateArr[2] + "/" + dateArr[1] + "/" +dateArr[0];
    }
    return (
      <Grid item xs={12} sm={4} md={3}>
      <Card 
      className={classes.card}
      onClick={() => handleOpen()}
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
      > 
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            alt={movie.Title}
            image={movie.poster_path ? ('https://image.tmdb.org/t/p/w500/' + movie.poster_path): background}
            title={movie.Title}
          />
          <div className={showDetails ? classes.overlay:classes.displayNone}>
            <CardContent>
                <Typography variant="caption" color="secondary" align="center" gutterBottom className={classes.noPoster}>
                  {movie.poster_path ? '':'no poster for this movie'}
                </Typography>
                <Typography gutterBottom variant="subtitle1" color="primary" align="center" style={{opacity: "1"}}>
                  {movie.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" align="center" gutterBottom className={classes.year}>
                  {movie.release_date && movie.release_date.substring(0,4)}
                </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
        <Modal
          className={classes.modal}
          open={open}
          onClose={() => handleClose()}
          closeAfterTransition
        >
          <Fade in={open}>
            <Container maxWidth="lg">
              <div className={classes.paper}>
                <CardMedia
                  className={classes.backdropImage}
                  component="img"
                  alt={movie.Title}
                  image={movie.backdrop_path ? ('https://image.tmdb.org/t/p/original/' + movie.backdrop_path): background}
                  title={movie.Title}
                />
                <div className={classes.backdropOverlay}>
                    <Grid container direction="column" spacing={3}>
                      <Grid item xs={12} align="flex-end" className={classes.exitBtn}>
                        <IconButton onClick={() => handleClose()} style={{color: 'white'}}><CloseIcon fontSize="large"/></IconButton>
                      </Grid>
                      <Grid item xs={12} align="center">
                        <Typography variant="caption" color="secondary" align="center" gutterBottom>
                          {movie.poster_path ? '':'no poster for this movie'}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="center">
                          {movie.title}
                        </Typography>
                        <Typography variant="body2" align="center" gutterBottom>
                        Overview:<br/>
                         {movie.overview}
                        </Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent" align="center" className={classes.rating}>
                          <Typography component="legend">{movie.vote_average && movie.vote_average}/10</Typography>
                          <Rating readOnly name="customized" value={movie.vote_average && movie.vote_average} max={10} precision={0.1}/>
                          <Typography component="legend">votes: {movie.vote_count && movie.vote_count}</Typography>
                        </Box>
                        <Typography variant="caption" align="center" gutterBottom>
                          Release date: {movie.release_date && formatDate(movie.release_date)}
                        </Typography>
                      </Grid>
                    </Grid>
                </div>
              </div>
            </Container>
          </Fade>
        </Modal>
      </Grid>
    )
}



export default MovieSummary;