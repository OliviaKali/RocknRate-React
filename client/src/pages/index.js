import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import { withRouter } from "react-router-dom";

class Home extends Component {
  _isMounted = false;

  state = {
    search: "",
    results: [],
    redirect: false
  };

  
  // componentDidMount() {
  //   this._isMounted = true;}

  searchArtist = search => {
    axios({
      method: "POST",
      // url: "/api/search/",
      url: "http://localhost:3001/api/search/",
      data: { artist: search }
    })
      .then(res => {
        console.log(res);
        this.props.handleFormSubmit(this.props.searchTerm);
        this.props.history.push("/artist");
      })
      .catch(err => console.log(err));
  };

  redirect = event => {
    this.props.handleFormSubmit(event)
    this.props.history.push('/artist')
  }
  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchArtist(this.state.search);
  //   // this.componentDidMount(this.state.search)
  //   // this.componentDidUpdate(this.state.results)
  //   // .then(({data}) => {
  //   //   this.setState({
  //   //     results:data
  //   //   })
  //   // })

  //   this.props.history.push({
  //     pathname: "/artist",
  //     state: {search:this.state.search}
  //   })

  // this.componentDidMount(this.state.search);
  // // then(() => this.setState({ redirect: true }));
  // this.setState({ redirect: true });
  // // this.setRedirect(this.state.redirect);
  // this.renderRedirect()
  // // .then(res => this.setState({ artist: res.data }))
  // // .catch(err => console.log(err));;
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { history } = this.props;
  //   if (prevState.results !== this.state.results) {
  //     history.push('/artist');
  //   }
  //   }

  // componentDidMount = search => {
  //   axios ({
  //     method: "GET",
  //     url:"http://localhost:3001/api/search/",
  //     data: { artist: search}
  //   })
  //     .then(result =>
  //       this.setState({
  //         results: result.data
  //       }),
  //     );
  // }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // };

  //  renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/artist' />
  //   }
  // }

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
    console.log(this.props)
    return (
      <div>
        <h1>home page</h1>
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.redirect}
          handleInputChange={this.props.handleSearchChange}
          // setRedirect={this.setRedirect}
          // renderRedirect={this.renderRedirect}
        />
      </div>
    );
  }
}

// export default withRouter(Home);
export default withRouter(Home);
