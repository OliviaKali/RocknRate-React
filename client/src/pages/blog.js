import React, { Component } from "react";
import axios from "axios"
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: props.search,
      results: props.results
    };
  }

  searchArtist = query => {
    axios({
      method: 'POST',
      url: "http://localhost:3001/api/search/",
      data: { artist: query}
    })
      .then(res => {
        console.log(res);
        this.setState({ results: res.data })})
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
  };

  
  // artist(props) {
  //   super(props);
  //   this.state = { spotifyAPI };
  // }

  render() {
    return (
      <div>
        <h1>Working</h1>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
 <iframe  class="spotifyPlayer" src="https://open.spotify.com/embed/artist/{this.state.results.id}"
       width="650" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    {/* <p>{this.state.results.id}</p> */}

      <article className="tile is-child box">
      {/* <p class="title">{this.state.results.name}</p> */}
              <p className="title" value={this.state.results.name}>{this.state.results.name}</p>
              <img id="artistImage" className="imageSize" src={this.state.results.image} />
      </article>
    
        {/* <ResultList results={this.state.results} /> */}

        {/* <iframe  className="spotifyPlayer" src="https://open.spotify.com/embed/artist/"
  {props.response.id}
   width="650" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
      </div>
    );
  }
}

export default Blog;
