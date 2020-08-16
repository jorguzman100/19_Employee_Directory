import axios from "axios";
const baseUrl = "https://randomuser.me/api/?";
let numberOfResults = 'results=50';
// const APIKEY = "&apikey=trilogy";
let fullUrl = `${baseUrl+numberOfResults}`;

export default {
    search: function () {
        // console.log('query: ', query);
    return axios.get(fullUrl);
  }
};
