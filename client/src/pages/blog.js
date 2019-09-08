import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { TextArea, FormBtn } from "../components/Form";
import PaperSheet from "../components/Paper/paper"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../pages/blog.css'
import { typography } from "@material-ui/system";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import 'typeface-roboto';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

import ListItemText from '@material-ui/core/ListItemText';
// import spotifyAPI from "../utils/spotifyAPI";

class Blog extends Component {
  state = {
    blogs: [],
    artist: "",
    blogger: "",
    rating: "",
    blog: ""
  };
  componentDidMount() {
    this.loadBlog();
  }

  // Loads all blogs  and sets them to this.state.blogs
  loadBlog = () => {
    API.getBlog()
      .then(res =>
        this.setState({
          blogs: res.data,
          artist: this.props.spotifyResults.name,
          blogger: "",
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

    if (this.state.blogger && this.state.rating) {
      API.saveBlog({
        artist: this.props.spotifyResults.name,
        blogger: this.state.blogger,
        rating: this.state.rating,
        blog: this.state.blog
      })
      .then(() => {this.props.getBlogEntries(this.props.spotifyResults.name); 
        this.setState({blogger: "", rating: "", blog: ""});} )
        // .then(() => this.props.getBlogEntries(this.props.spotifyResults.name))
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        
        
        
      

      
      
      {/* <Paper id="paper1">

      <img
                
                id="img1"
                src="https://hdqwalls.com/wallpapers/headphones-monochrome-ad.jpg"
                alt="X"
              />
      </Paper> */}
    
      
      
      <Grid container justify='center'>
      <Paper id='paperPlane'>

<Typography variant="h1" component="h2" gutterBottom>
      <p className="title" value={this.props.spotifyResults.name} id='search-name'>
                {this.props.spotifyResults.name}
              </p></Typography>
              <Grid id="fullGrid">
      <Grid container justify='center'>
      <Grid item xs={6}>
      
    
            <Paper id='paper1'>

            <article>
              
              <img
                id="img2"
                className="imageSize"
                src={this.props.spotifyResults.image}
                alt={this.props.spotifyResults.name}
              />
            </article>
            </Paper>
            </Grid>
            
            
            
      <Grid item xs={6}>
      {/* <Paper id="search-name">
        <Typography><p className="title" value={this.props.spotifyResults.name}>
                {this.props.spotifyResults.name}
              </p></Typography>
      </Paper> */}
      
      <Paper id="search-artist">
        <Typography>
        
        <SearchForm
          search={this.props.searchTerm}
          handleFormSubmit={this.props.handleFormSubmit}
          handleInputChange={this.props.handleSearchChange}
        /></Typography>
        <Box component="fieldset" mb={3} borderColor="transparent" id="rating">
        <Typography component="legend"></Typography>
        <Rating value={5} readOnly name="size-small" value={2} size="small" />
      </Box>
      </Paper>

        
        <Paper id='spotifyPaper'>
        
        

        {this.props.spotifyResults.length === 0 ? (
          <h1></h1>
        ) : (
          <>
            <iframe
              title="musicPlayer"
              value={this.props.spotifyResults.name}
              className="spotifyPlayer"
              src={`https://open.spotify.com/embed/artist/${this.props.spotifyResults.id}`}
              width="650"
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
            
            
            
            
            
            
            
         
        
            
            <Grid container id='divider-container'>
        
        

      <Grid item xs={6}>
      
      <Divider variant="middle" id="divider"/>
        
          <Typography><h1>Rate Your Artist</h1></Typography>

          
          {/* <Grid container id='blogField'> */}
          <form>

          <TextField
        id="outlined-full-width"
        label="Name"
        style={{ margin: 8 }}
        
        
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={this.state.title}
              onChange={this.handleInputChangeBlog}
              name="title"
              placeholder="Blogger Name (required)"
      />
      <TextField
        id="outlined-full-width"
        label="Rating"
        style={{ margin: 8 }}
        
        
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={this.state.rating}
              onChange={this.handleInputChangeBlog}
              name="rating"
              placeholder="Rating (required)"
      />
            {/* <Input
            id="filled-full-width"
              value={this.state.title}

              onChange={this.handleInputChangeBlog}
              name="blogger"
              placeholder="Blogger Name (required)"
            /> */}
{/* 
            <Input
              value={this.state.rating}
              onChange={this.handleInputChangeBlog}
              name="rating"
              placeholder="Rating (required)"
            /> */}
<TextField
        id="outlined-dense-multiline"
        label="Blog Post"
        rows={5}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="5"
        value={this.state.blog}
              onChange={this.handleInputChangeBlog}
              name="blog"
              placeholder="Comment (Required)"
      />
            {/* <TextArea
              value={this.state.blog}
              onChange={this.handleInputChangeBlog}
              name="blog"
              placeholder="Comment (Required)"
            /> */}


            <Button enabled={!(this.state.rating && this.state.title)}
              onClick={this.handleFormSubmitBlog} variant="contained" color="primary" id="submitButton" >
        Submit
        <CloudUploadIcon/>
      </Button>
            {/* <FormBtn
              disabled={!(this.state.rating && this.state.title)}

              onClick={this.handleFormSubmitBlog}
            >
              Submit Blog
            </FormBtn> */}
            
          </form>
          
          
          </Grid>
          
          
          
          
          <Grid item xs={4}>
      
          <Container>
          <Paper id="footer-blog">

          <Typography id="blogEntries"><h1>Blog Entries</h1></Typography>


          {/* {this.props.blogEntries.length ? (
            <Card>
              {this.props.blogEntries.map(book => {
                return (
                  <ListItem key={blog._id}>
                    <a href={"/blogs/" + blog._id}>
                      <p>Artist: {blog.artist}</p>

                      <p>Name: {blog.blogger}</p>

                      <p>Rating: {blog.rating}</p>

                      <p>Comment: {blog.blog}</p>
                    </a>
                  </ListItem>
                );
              })}
              </Card> */}
              
              {this.props.blogEntries.length ? (
                <List component="nav" aria-label="mailbox folders">
              {this.props.blogEntries.map(book => {
                return (
                  <>
      <ListItem key={book._id} divider>
      <Divider />
        <ListItemText id="bookArist" className="readBlogs"/>
        <Typography><p><bold>Artist: </bold>{book.artist}</p>
        <p><bold>Name: </bold>{book.title}</p>
        <p><bold>Rating: </bold>{book.rating}</p>
        <p><bold>Comment: </bold>{book.blog}</p>
        </Typography>
      </ListItem>
      <Divider />
      {/* <ListItem button divider>
        <ListItemText id="bookTitle" className="readBlogs"/>
        <Typography><p><bold>Name: </bold>{book.title}</p></Typography>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText id="bookRating" className="readBlogs"/>
        <Typography><p><bold>Rating: </bold>{book.rating}</p></Typography>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText id="bookBlog" className="readBlogs"/>
        <Typography><p><bold>Comment: </bold>{book.blog}</p></Typography>
      </ListItem> */}
      </>
      );
              })}
    </List>
    
          ) : (
            <h3>No Blogs to Display</h3>
          )}
          </Paper>
          </Container>
          
</Grid>
</Grid>
</Grid>
</Paper>
</Grid>







      </div>
    );
  };
}

export default withRouter(Blog);
