import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/index";
import Blog from "./pages/blog";
import About from "./pages/about";
import spotifyAPI from "./utils/spotifyAPI"
// import Artist from "./pages/blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }

  // searchArtist = query => {
  //   spotifyAPI.artistSearch(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  searchArtist = query => {
    console.log(query);
    axios({
      method: 'POST',
      url: "http://localhost:3001/api/search/",
      data: { artist: query}
    })
      .then(res => {this.setState({ results: res.data.data });
      console.log(res.data.data);})

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


  // function withProps(Component, props) {
  //   return function(matchProps) {
  //     return <Component {...props} {...matchProps} />
  //   }
  //  }
  // exact render={() => <Lectures config={this.state.config} />} />

  // };
  render () {
    return (
        // <Router history={browserHistory}>
        //   <Route path='/' component={App}>
        //     <Route path='foo' component={withProps(Foo, { test: 'ing' })} />
        //   </Route>
        // </Router>
        //    )
        //   }
      
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artist" exact render={() => <Blog search={this.state.search} results={this.state.results} />} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }  
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
