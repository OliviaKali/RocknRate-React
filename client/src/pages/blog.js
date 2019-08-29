import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList"

class Blog extends Component{

  //  componentDidMount() {
  //   this.searchArtist("beyonce");
  // }

  render() {
    return (
      <div>
<SearchForm
  search={this.state.search}
  handleFormSubmit={this.handleFormSubmit}
  handleInputChange={this.handleInputChange}
/>
  <ResultList results={this.state.results} />
  </div>
);
  }

}

export default Blog;