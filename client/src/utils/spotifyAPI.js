import axios from "axios";
// import router from "../../../routes/apiRoutes"
// import App from "../App"

export default {

artistSearch: axios({
   
    method: 'POST',
    url: "/api/search/",
    data: { artist: this.state.search }
  }).then(function(response) {
      console.log(response);
  })
};
