import axios from "axios";
import { ENV } from "~/shared/config/env";
import * as process from "process";

const isVercel = () => {
  console.log("@env", process.env);
  return !!ENV.NEXT_PUBLIC_VERCEL_URL;
};

export const $api = axios.create({
  baseURL: isVercel()
    ? ENV.NEXT_PUBLIC_VERCEL_URL + "/api"
    : ENV.NEXT_PUBLIC_API_URL,
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
