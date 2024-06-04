import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";
import { Pages } from "~/entities/pages/types";

export const getPages = () => $api.get<Pages[]>(API_ENDPOINTS.PAGES());
