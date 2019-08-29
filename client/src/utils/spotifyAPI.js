import axios from "axios";

const BASEURL = "https://api.spotify.com/v1/search?q=";
const APIKEY = "&type=artist&market=US";

// beyonce

export default {

    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
}
};
