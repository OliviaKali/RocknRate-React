import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import axios from "axios"
import SearchForm from "../components/SearchForm"

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: "",
  //     results: [],
  //     redirect: false
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      search: props.search,
      results: props.results,
      redirect: false
    };
  }

  searchArtist = search => {
    axios({
      method: "POST",
      // url: "/api/search/",
      url: "http://localhost:3001/api/search/",
      data: { artist: search }
    })
      .then(res => {
        console.log(res);
        this.setState({ results: res.data });
      })
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
    this.props.history.push({
      pathname: "/artist",
      state: {search: this.state.search}
    })

    // // then(() => this.setState({ redirect: true }));
    // this.setState({ redirect: true });
    // // this.setRedirect(this.state.redirect);
    // this.renderRedirect()
    // // .then(res => this.setState({ artist: res.data }))
    // // .catch(err => console.log(err));;
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

   renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/artist' />
    }
  }

  // //Change this function to react to have the artistName
  //   //appear in the url
  //   //example: localhost:3000/artist/beyonce

  // var searchInput = $.getUrlVar("s");
  // if (null !== searchInput) {
  //   var decodedSearch = decodeURIComponent(searchInput);
  //   searchArtist(decodedSearch);
  // }
  // $.extend({
  //   getUrlVars: function() {
  //     var vars = [],
  //       hash;
  //     var hashes = window.location.href
  //       .slice(window.location.href.indexOf("?") + 1)
  //       .split("&");
  //     for (var i = 0; i < hashes.length; i++) {
  //       hash = hashes[i].split("=");
  //       vars.push(hash[0]);
  //       vars[hash[0]] = hash[1];
  //     }
  //     return vars;
  //   },
  //   getUrlVar: function(name) {
  //     return $.getUrlVars()[name];
  //   }
  // });

  render() {
    return (
      <div>
      <h1>home page</h1>
      <SearchForm
      search={this.state.search}
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      // setRedirect={this.setRedirect}
      // renderRedirect={this.renderRedirect}
    />
    </div>
    );
  }

  }
  
  export default Home;