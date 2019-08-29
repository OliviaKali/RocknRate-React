import axios from "axios";
import router from "../../../routes/apiRoutes"
// import App from "../App"

// const BASEURL = "https://api.spotify.com/v1/search?q=";
// const APIKEY = "&type=artist&market=US";

// beyonce

export default {

    // saveBook: function(bookData) {
    //     return axios.post("/api/books", bookData);
    //   }

//    artistDisplay: axios.post('/api/search')
//   .then(function (response) {
//     console.log(response);
//   }),
//     search: function(query) {
//         return axios.get(BASEURL + query + APIKEY);
// },

//search is imported from App.js in the state
artistSearch: axios({
   
    method: 'POST',
    url: "/api/search/",
    data: { artist: this.state.search }
  }).then(function(response) {
      console.log(response);
  })
};
