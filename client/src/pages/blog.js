import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
// import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  state = {
    search: "",
    results: []
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
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  };

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

  // var searchInput = $.getUrlVar("s");
  // if (null !== searchInput) {
  //   var decodedSearch = decodeURIComponent(searchInput);
  //   searchArtist(decodedSearch);
  // }
  // $.extend({
  //   getUrlVars: function() {
  //     var vars = [],
  //       hash;
  //     var hashes = window.location.href
  //       .slice(window.location.href.indexOf("?") + 1)
  //       .split("&");
  //     for (var i = 0; i < hashes.length; i++) {
  //       hash = hashes[i].split("=");
  //       vars.push(hash[0]);
  //       vars[hash[0]] = hash[1];
  //     }
  //     return vars;
  //   },
  //   getUrlVar: function(name) {
  //     return $.getUrlVars()[name];
  //   }
  // });

  render() {
    return (
      <div>
        <h1>Working</h1>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {/* unable to see results with quotations in src, errors if not in quotes */}
        <iframe
          title="musicPlayer"
          value={this.state.results.name}
          className="spotifyPlayer"
          src={`https://open.spotify.com/embed/artist/${this.state.results.id}`}
          width="650"
          height="500"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>

        <article className="tile is-child box">
          <p className="title" value={this.state.results.name}>
            {this.state.results.name}
          </p>
          <img
            id="artistImage"
            className="imageSize"
            src={this.state.results.image}
            alt={this.state.results.name}
          />
        </article>
      </div>
    );
  }
}

export default Blog;
