import axios from "axios";
import { ENV } from "~/shared/config/env";

export const $api = axios.create({
  baseURL: ENV.NEXT_PUBLIC_API_URL,
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
