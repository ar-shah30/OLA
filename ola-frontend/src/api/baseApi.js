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