# rocknRate-react

## Built with

Built with react, Material-UI, Spotify API, Firebase, node.js, and express.js.

## UI
Bulma and materialize were both replaced with a react library, Material-UI, to meet the react requirements.
The previous verion of RockNRate used ajax which is not compatible with react so any ajax used was changed to axios.

## API
Spotify API used for image, artist name, and id which is used to identify artist to display artist's songs on the spotify player. 
```
 spotify
    .search({ type: "artist", query: req.body.artist, limit: 3 })
    .then(function(response) {
      var artistName = response.artists.items[0].name;
      var artistGenres = response.artists.items[0].genres;
      var imageUrl = response.artists.items[0].images[0].url;
      var artistID = response.artists.items[0].id;
```

Node-Spotify is used to pull the information in the backend, which is pushed to the frontend and appended onto the page to display the requested information. 
The Spotify keys are hidden through .env and added to heroku to be able to deploy it without compromising the keys.

## React
Insert React Info here :P

## Database/mongoDB
Blogs are stored in the mongoDB collection.
Pulling up the artist only shows the comments about the artist.

## Firebase
Firebase was used for the sign up and log in.  Firebase is owned by Google to develop apps that require databases without using any SQL.
A local user can sign in to an existing account on the sign in route.
A new user can signup using the sign up route.
An account page is also set up as a protected route.  (For future development)
Sign In and Sign Out will not display if a user is authenticated.


## Future Development
<ul>
<li>Create Artist Page for local/unknown artists to be able to add profile pages about themselves</li>
<li>Create feature that displays new artists, where you can search by genre to find new music</li>
<li>Only allow Rating to be 1-5 stars - average rating displayed</li>
<li>Connect to BandsinTown API to display concert details for each artist/ Use an API to include brief bio about each artist</li>
<li>Show your own posts on separate component -- Account Page</li>
<li>Sign Out button within Navbar</li>
</ul>


# Credits

Jon Cheshire, Matt Maliaros, Olivia Kalinowski, Patrick Moroney, Mackenzie Balisage, Anthony Sambogna