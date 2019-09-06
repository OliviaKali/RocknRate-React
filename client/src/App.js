import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";
import Home from "./pages/index";
import Blog from "./pages/blog";
import About from "./pages/about";
import PrimarySearchAppBar from "./components/NavBar/navbar";
import SignUpPage, { SignUpForm } from "./components/SignUp/index";
import SignInPage, { SignInForm } from "./components/SignIn/index";
import * as ROUTES from './components/Firebase/routes';
import SignOutButton from './components/SignOut';
import Account from './components/Account/';
import {withFirebase} from './components/Firebase';
const PossibleSignOut = ({ authUser }) => (
  <>{authUser ? <><SignOutButton /> <Switch><Route exact path="/signup"/>
  <Route exact path="/signin"/><Route exact path = "/account"><Account/></Route></Switch></>: <Switch><Route path="/signup"> <SignUpPage/></Route>
  <Route path="/signin"> <SignInPage/></Route></Switch>
  }</>
);

class App extends Component {
  state = { searchTerm: "", spotifyResults: [], authUser: null };

  
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArtist(this.state.searchTerm);
  };

  searchArtist = search => {
    axios({
      method: "POST",
      url: "/api/search/",
      // url: "http://localhost:3001/api/search/",
      data: { artist: search }
    })
      .then(res => {
        console.log(res);
        this.setState({ spotifyResults: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <PrimarySearchAppBar/>
      <Router>
        <div>
        <PossibleSignOut authUser={this.state.authUser}/>
            <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  searchTerm={this.state.searchTerm}
                  handleSearchChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  spotifyResults={this.state.spotifyResults}
                />
              )}
            />
            <Route
              path="/artist"
              render={props => (
                <Blog
                  {...props}
                  searchTerm={this.state.searchTerm}
                  handleSearchChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                  spotifyResults={this.state.spotifyResults}
                />
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
</div>
    );
  }
}

export default withFirebase(App);
