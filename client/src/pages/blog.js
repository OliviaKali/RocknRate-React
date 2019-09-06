import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  state = {
    search: "",
    results: [],
      books: [],
    artist: '',
    title: "",
    rating: "",
    blog: ""
  };
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        //need to connect artist to props.artistName
        this.setState({ books: res.data, artist: this.props.spotifyResults.name, title: "", rating: "", blog: "" })
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChangeBlog = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmitBlog = event => {
    event.preventDefault();
    if (this.state.title && this.state.rating) {
      // console.log(this.state.artist)
      API.saveBook({
        artist: this.props.spotifyResults.name,
        title: this.state.title,
        rating: this.state.rating,
        blog: this.state.blog
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
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
    this.getBlogEntries(this.state.search)
    
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Working</h1>
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.props.handleFormSubmit}
          handleInputChange={this.props.handleSearchChange}
        />
        {this.props.spotifyResults.length === 0 ? (
          <h1>Search for an artist.</h1>
        ) : (
          <>
            <iframe
              title="musicPlayer"
              value={this.props.spotifyResults.name}
              className="spotifyPlayer"
              src={`https://open.spotify.com/embed/artist/${this.props.spotifyResults.id}`}
              width="650"
              height="500"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>

            <article className="tile is-child box">
              <p className="title" value={this.props.spotifyResults.name}>
                {this.props.spotifyResults.name}
              </p>
              <img
                id="artistImage"
                className="imageSize"
                src={this.props.spotifyResults.image}
                alt={this.props.spotifyResults.name}
              />
            </article>
          </>
        )};
        <Container fluid>

 <h1>Write A Blog Entry</h1>

  <form>
    <Input
      value={this.state.title}
      onChange={this.handleInputChangeBlog}
      name="title"
      placeholder="Blog Title (required)"
    />

    <Input
      value={this.state.rating}
      onChange={this.handleInputChangeBlog}
      name="rating"
      placeholder="Rating (required)"
    />

    <TextArea
      value={this.state.blog}
      onChange={this.handleInputChangeBlog}
      name="blog"
      placeholder="Blog Entry (Required)"
    />

    <FormBtn
      disabled={!(this.state.rating && this.state.title)}
      onClick={this.handleFormSubmitBlog}
    >
      Submit Blog
    </FormBtn>

  </form>

  <h1>Prior Blog Entries</h1>

    {this.props.blogEntries.length ? (
      <List>
        {this.props.blogEntries.map(book => {
          return (

            <ListItem key={book._id}>

              <a href={"/books/" + book._id}>

                <p>
                  Blog Artist: {book.artist}
                </p>

                <p>
                  Blog Title: {book.title}
                </p>

                <p>
                  Rating: {book.rating}
                </p>

                <p>
                  Blog Entry: {book.blog}
                </p>

              </a>

            </ListItem>

          );
        })}
      </List>

    ) : (
      <h3>No Blogs to Display</h3>
    )}

</Container>

      </div>
    );
  }
}

export default withRouter(Blog);
