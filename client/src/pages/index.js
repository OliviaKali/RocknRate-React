import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    search: "",
    results: [],
    // redirect: false
  };

  searchArtist = search => {
    axios({
      method: "POST",
      // url: "/api/search/",
      url: "http://localhost:3001/api/search/",
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
        <h1>home page</h1>
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.redirect}
          handleInputChange={this.props.handleSearchChange}
        />
      </div>
    );
  }
}

export default withRouter(Home);
