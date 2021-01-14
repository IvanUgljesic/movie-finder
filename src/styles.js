import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    body: {
      flexGrow: 1,
      width: '100%',
      height: '100%'
    },
    root:{
      minHeight: '100vh',
      color: 'white',
      width: '100%',
      alignContent: 'center',
      [theme.breakpoints.down('sm')]: { 
        padding: '8px 0',
      },
    },
}));