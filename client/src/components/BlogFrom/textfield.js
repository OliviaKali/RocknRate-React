// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
//   dense: {
//     marginTop: theme.spacing(2),
//   },
//   menu: {
//     width: 200,
//   },
// }));

// export default function OutlinedTextFields(props) {
//   const classes = useStyles();

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   return (

//     <Container>
//     <form className={classes.container} noValidate autoComplete="off">
//       <TextField
//         id="outlined-name"
//         label="Name"
//         className={classes.textField}
//         value={this.state.title}
//         onChange={this.handleInputChangeBlog}
//         margin="normal"
//         variant="outlined"
//         placeholder="Blog Title (required)"
//         name="title"
//       />
//       <TextField
//         id="outlined-name"
//         label="Name"
//         className={classes.textField}
//         value={this.state.rating}
//               onChange={this.handleInputChangeBlog}
//         margin="normal"
//         variant="outlined"
//         placeholder="Blog Title (required)"
//         name="title"
//       />
//       <TextField
//         id="outlined-name"
//         label="Name"
//         className={classes.textField}
//         value={this.state.blog}
//               onChange={this.handleInputChangeBlog}
//         margin="normal"
//         variant="outlined"
//         placeholder="Blog Title (required)"
//         name="title"
//       /> <FormBtn
//               disabled={!(this.state.rating && this.state.title)}
//               onClick={this.handleFormSubmitBlog}
//             >
//               Submit Blog
//             </FormBtn>
          

//           <h1>Prior Blog Entries</h1>

//           {this.props.blogEntries.length ? (
//             <List>
//               {this.props.blogEntries.map(book => {
//                 return (
//                   <ListItem key={book._id}>
//                     <a href={"/books/" + book._id}>
//                       <p>Blog Artist: {book.artist}</p>

//                       <p>Blog Title: {book.title}</p>

//                       <p>Rating: {book.rating}</p>

//                       <p>Blog Entry: {book.blog}</p>
//                     </a>
//                   </ListItem>
//                 );
//               })}
//             </List>
//           ) : (
//             <h3>No Blogs to Display</h3>
//           )}
          
//        </form>
//        </Container>
//   );
// }
