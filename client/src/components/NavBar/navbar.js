import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../pages/blog.css'
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));




export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" id='navBar'>
        <Toolbar>
        <Button variant="contained" href="/" style={{backgroundColor: "orange"}}>
        Home
      </Button>

          <Typography variant="h3" className={classes.title} id='rockNrate'>
            RocknRate
          </Typography>
          <Button color="inherit"><Typography variant="h6">Login</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}