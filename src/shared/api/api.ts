import axios from "axios";

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
