import React from 'react';
import { withFirebase } from '../Firebase';
import Button from '@material-ui/core/Button';
import './signout.css'



const SignOutButton = ({ firebase }) => (
  <Button variant="contained" onClick={firebase.doSignOut} id='signOut'>
    Sign Out
  </Button>
);
export default withFirebase(SignOutButton);

