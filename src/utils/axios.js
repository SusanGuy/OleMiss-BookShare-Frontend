import axios from "axios";
const url =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "";

// const url= 'http://localhost:4000'
export default axios.create({
  baseURL: url,
});
