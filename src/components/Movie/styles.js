import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
      flexGrow: 1,
      minHeight: '10vh',
      padding: theme.spacing(1)
    },
    card: {
      maxWidth: '100%',
      overflow: 'hidden'
    },
    img: {
      height: "340px",
      backgroundSize: 'contain',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: "420px",
      },
      [theme.breakpoints.down('xs')]: {
        height: "640px",
      }
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      color: '#000',
      backgroundColor: 'white',
      opacity: 0.75,
      width: '100%',
      height: '100%',
      textShadow: '2px 2px rgba(0,0,0,0.09)',
    },
    displayNone: {
      display: 'none'
    },
    year: {
      position: 'absolute',
      bottom: '5px',
      left: '0',
      opacity: 1,
      textAlign: 'center',
      width: '100%'
    },
    noPoster: {
      position: 'absolute',
      top: '5px',
      left: '0',
      opacity: 1,
      textAlign: 'center',
      width: '100%'
    },
    pagination: {
      alignContent: 'center',
      '& .MuiPaginationItem-root':{
        color:"white"
      },
      '& .Mui-selected':{
        border:"1px solid white"
      },
      "& > *": {
        marginTop: theme.spacing(2),
        justifyContent:"center",
        display:'flex'
      }
    },
    modal: {
      display: 'flex',
    },
    paper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0
    },
    backdropImage: {
      height: '100%',
      width: '100%'
    },
    backdropOverlay: {
      position: 'absolute',
      bottom: 0,
      top: 0,
      color: 'white',
      backgroundColor: '#000',
      opacity: 0.75,
      width: '100%',
    },
    exitBtn: {
      top: '10vh',
      minHeight: '50vh',
      alignSelf: 'flex-end'
    },
    rating: {
      "& .MuiRating-icon": {
        color: "white"
      },
      "& .MuiRating-iconEmpty": {
        color: "#808080"
      }
    }
}));