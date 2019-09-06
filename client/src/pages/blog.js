import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import PaperSheet from "../components/Paper/paper"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../pages/blog.css'
import { typography } from "@material-ui/system";
// import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  state = {
    books: [],
    artist: "",
    title: "",
    rating: "",
    blog: ""
  };
  componentDidMount() {
    this.loadBlog();
  }

  // Loads all books  and sets them to this.state.books
  loadBlog = () => {
    API.getBlog()
      .then(res =>
        this.setState({
          books: res.data,
          artist: this.props.spotifyResults.name,
          title: "",
          rating: "",
          blog: ""
        })
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

  handleFormSubmitBlog = event => {
    event.preventDefault();

    if (this.state.title && this.state.rating) {
      // console.log(this.state.artist)
      API.saveBlog({
        artist: this.props.spotifyResults.name,
        title: this.state.title,
        rating: this.state.rating,
        blog: this.state.blog
      })
        .then(() => this.props.getBlogEntries(this.props.spotifyResults.name))
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Container maxWidth="sm">
        <Grid container>
        <Grid item xs={12}>
      <Grid container justify="center">
      
      <Paper>
        Hello
      </Paper>
        </Grid>
      </Grid>
      <Grid item xs={6}>
      <Grid container justify="center">
    
            <Paper>

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
            </Paper>
            </Grid>
            </Grid>
      <Grid item xs={6}>
      <Grid container justify="center">
      <Paper className={styles.paper1}>
        <Typography className={styles.paper1}><SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.props.handleFormSubmit}
          handleInputChange={this.props.handleSearchChange}
        /></Typography>
      </Paper>

        
        <Paper>
        
        {this.props.spotifyResults.length === 0 ? (
          <h1></h1>
        ) : (
          <>
            <iframe
              title="musicPlayer"
              value={this.props.spotifyResults.name}
              className="spotifyPlayer"
              src={`https://open.spotify.com/embed/artist/${this.props.spotifyResults.id}`}
              width="400"
              height="400"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
            </>
        )}
            </Paper>
            </Grid>
            </Grid>
            
            
            
         
        
            
        
        <Grid item xs={12}>
      <Grid container justify="center">
      
        <Container fluid>
          <h1>Write A Blog Entry</h1>

          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChangeBlog}
              name="title"
              placeholder="Blogger Name (required)"
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
              placeholder="Comment (Required)"
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
                      <p>Artist: {book.artist}</p>

                      <p>Name: {book.title}</p>

                      <p>Rating: {book.rating}</p>

                      <p>Comment: {book.blog}</p>
                    </a>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Blogs to Display</h3>
          )}
          </Container>
</Grid>
</Grid>
</Grid>
</Container>
      </div>
    );
  };
}

export default withRouter(Blog);
