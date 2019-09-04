import axios from "axios";
// import router from "../../../routes/apiRoutes"
// import App from "../App"

export default {
  searchArtist: function(search) {
    axios({
      method: "POST",
      url: "/api/search/",
      // url: "http://localhost:3001/api/search/",
      data: { artist: search }
    })
      .then(res => {
        console.log(res);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

// artistSearch: axios({
//     method: 'POST',
//     url: "/api/search/",
//     data: { artist: "beyonce"}
//   }).then(function(response) {
//       console.log(response);
//   })
};
