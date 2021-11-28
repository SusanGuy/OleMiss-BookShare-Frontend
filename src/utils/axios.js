import axios from "axios";
const url = "https://olemiss-bookshare.herokuapp.com";

// const url= 'http://localhost:4000'
export default axios.create({
  baseURL: url,
});
