import { Pages } from "../types";
import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";

export const updatePage = async (id: string, data: Partial<Pages>) =>
  await $api.put(API_ENDPOINTS.PAGES_UPDATE(id), data);
