import React, { Component } from "react";
import SearchForm from "../components/SearchForm"

class Home extends Component {
  // componentDidMount() {
  //   this.searchGiphy("beyonce");
  // }

  render() {
    return (
      <SearchForm
      search={this.state.search}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
    />
    );
  }

  }
  
  export default Home;