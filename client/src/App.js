import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import Blog from "./pages/blog";
import About from "./pages/about";
import spotifyAPI from "./utils/spotifyAPI"
// import Artist from "./pages/blog";

class App extends Component {
  state = {
    search: "",
    results: []
  };

  // componentDidMount() {
  //   this.searchArtist("beyonce");
  // }

  searchArtist = query => {
    spotifyAPI.search(query)
      .then(res => this.setState({ results: res.data.data }))
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
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artist" component={Blog} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
  
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
