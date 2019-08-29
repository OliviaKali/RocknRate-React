import React from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList"

function Blog() {

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

export default Blog;