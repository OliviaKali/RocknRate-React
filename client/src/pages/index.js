import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  state = {
    search: "",
    results: [],
    // redirect: false
  };

  searchArtist = search => {
    axios({
      method: "POST",
      url: "/api/artist/",
      data: { artist: search }
    })
      .then(res => {
        console.log(res);
        this.props.handleFormSubmit(this.props.searchTerm);
        this.props.history.push("/artist");
      })
      .catch(err => console.log(err));
  };

  redirect = event => {
    this.props.handleFormSubmit(event)
    this.props.history.push('/artist')
  }

  // //Change this function to react to have the artistName
  //   //appear in the url
  //   //example: localhost:3000/artist/beyonce

  render() {
    console.log(this.props)
    return (
      <div>
        
        <Grid container justify='center'>
      <Grid item xs={3}>
      <Paper id="search-index">
      <Typography>
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.redirect}
          handleInputChange={this.props.handleSearchChange}
        />
        </Typography>
        </Paper>
        </Grid>
        </Grid>

      </div>
    );
  }
}

export default withRouter(Home);
