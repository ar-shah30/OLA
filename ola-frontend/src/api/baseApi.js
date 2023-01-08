/* This class is a wrapper for the Axios library that allows us to make HTTP requests to our API */
import axios from "axios";

export default class baseApi {
  constructor(baseUrl) {
    this.Axios = axios.create({ baseURL: baseUrl }, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
};