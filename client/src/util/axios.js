import axios from "axios";
const { REACT_APP_API_URL } = process.env;

console.log("Base URL from env:", process.env.REACT_APP_API_BASE_URL);

const instance = axios.create({
  baseURL: "https://mernserver-084b166fbf29.herokuapp.com/", // Replace with your actual base URL
});

export default instance;
