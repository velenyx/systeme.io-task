import axios from "axios";

export const $api = axios.create({
  baseURL: "http://localhost:3000/api",
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
