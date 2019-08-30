import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import spotifyAPI from "../utils/spotifyAPI"

class Blog extends Component{

  artist(props) {
    super(props);
    this.state = {spotifyAPI}
  }
  // componentDidMount() {
  //   this.searchArtist("beyonce");
  // }

  // searchArtist = query => {
  //   spotifyAPI.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchArtist(this.state.search);

  // };

  render() {
    return (
      <div>
<SearchForm
  search={this.state.search}
  handleFormSubmit={this.handleFormSubmit}
  handleInputChange={this.handleInputChange}
/>
  <ResultList results={this.state.results} />

{/* need to render info */}
  {/* <iframe  className="spotifyPlayer" src="https://open.spotify.com/embed/artist/
  {props.response.id}"
   width="650" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
  
  </div>

);
  }

}

export default Blog;