import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  artist(props) {
    super(props);
    this.state = { spotifyAPI };
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />

        {/* <iframe  className="spotifyPlayer" src="https://open.spotify.com/embed/artist/"
  {props.response.id}
   width="650" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
      </div>
    );
  }
}

export default Blog;
