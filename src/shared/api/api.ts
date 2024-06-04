import axios from "axios";
import { ENV } from "~/shared/config/env";

const isVercel = !!ENV.NEXT_PUBLIC_VERCEL_URL;

export const $api = axios.create({
  baseURL: isVercel
    ? `http://${ENV.NEXT_PUBLIC_VERCEL_URL}/api`
    : ENV.NEXT_PUBLIC_API_URL,
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
});
