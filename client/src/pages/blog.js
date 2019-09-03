import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
// import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  state = {
    search: "",
    results: []
  };

  // searchArtist = search => {
  //   axios({
  //     method: "POST",
  //     // url: "/api/search/",
  //     url: "http://localhost:3001/api/search/",
  //     data: { artist: search }
  //   })
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ results: res.data });
  //       // this.props.history.push("/artist");
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArtist(this.state.search);
    // .then(res => this.setState({ artist: res.data }))
    // .catch(err => console.log(err));;
  };

  // //Change this function to react to have the artistName
  //   //appear in the url
  //   //example: localhost:3000/artist/beyonce

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Working</h1>
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.props.handleFormSubmit}
          handleInputChange={this.props.handleSearchChange}
        />
        {this.props.spotifyResults.length === 0 ? (
          <h1>Search for an artist.</h1>
        ) : (
          <>
            <iframe
              title="musicPlayer"
              value={this.props.spotifyResults.name}
              className="spotifyPlayer"
              src={`https://open.spotify.com/embed/artist/${this.props.spotifyResults.id}`}
              width="650"
              height="500"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>

            <article className="tile is-child box">
              <p className="title" value={this.props.spotifyResults.name}>
                {this.props.spotifyResults.name}
              </p>
              <img
                id="artistImage"
                className="imageSize"
                src={this.props.spotifyResults.image}
                alt={this.props.spotifyResults.name}
              />
            </article>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Blog);
