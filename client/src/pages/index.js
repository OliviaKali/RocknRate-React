import React, { Component } from "react";
import SearchForm from "../components/SearchForm"

class Home extends Component {

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