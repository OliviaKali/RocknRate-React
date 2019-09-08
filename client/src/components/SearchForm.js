import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    float: 'right',
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));


export default function SearchForm(props) {
  const classes = useStyles();



  return (
    <div className={classes.container}>
    <label htmlFor="search"></label>
      <Input
        defaultValue="Hello world"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={props.handleInputChange}
          value={props.search}
          name='searchTerm'
          type="text"
          
          placeholder="Search Artist"
          id="search"
      />
      <Button onClick={props.handleFormSubmit} variant="contained" color="" className={classes.button}>
        Search
        <Icon className={classes.rightIcon}>search</Icon>
      </Button>
      {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button> */}
      </div>
  );
}


