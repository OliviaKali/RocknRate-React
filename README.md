# rocknRate-react

Music blog created tp provide users with a unique experience to search their favorite artists and be able to comment/rate them as well as listen to their songs through the spotify API and read some information about them all in the same place. Users are able to sign up to the website through firebase. 

RocknRate-react is a MERN stack application.


## Built with
Built with react, Material-UI, Spotify API, Firebase, axios, mongoose, node.js, mongoDB, and express.js.

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

## Database/mongoDB
Comments are stored in MongoDB. Comments are specific to each artist, so only comments are shown when an artist is searched.

## Firebase
Firebase was used for the sign up and log in.

## Future Development
Create Artist Page for local/unknown artists to be able to add profile pages about themselves
Create feature that displays new artists, where you can search by genre to find new music
Only allow Rating to be 1-5 stars - average rating displayed
Connect to BandsinTown API to display concert details for each artist/ Use an API to include brief bio about each artist