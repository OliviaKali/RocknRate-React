import React, { Component } from "react";
import SearchForm from "../components/SearchForm"

class Home extends Component {

  render() {
    return (
      <div>
      <h1>home page</h1>
      {/* need to add state into home?!
      <SearchForm
      search={this.state.search}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
    /> */}
    </div>
    );
  }

  }
  
  export default Home;