import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
      flexGrow: 1,
      minHeight: '5vh',
      padding: theme.spacing(1),
      alignItems: 'center'
    },
    logo: {
      height: '100%',
      width: 'auto',
      margin: '1vh auto',
      maxWidth: '10vw'
    }
}));