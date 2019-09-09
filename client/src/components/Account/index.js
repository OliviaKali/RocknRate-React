import React from "react";
import FirebaseContext, { withFirebase } from '../Firebase';
import 'firebase/auth';
import * as firebase from 'firebase';


const Account = () => (
       <div>
         This is your account page.  This is only visible when signed in.
       </div>
      );

export default withFirebase(Account);