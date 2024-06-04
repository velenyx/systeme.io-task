import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";
import { PricePlan } from "../types";

export const updatePricePlan = (id: string, data: Partial<PricePlan>) =>
  $api.put(API_ENDPOINTS.PRICE_PLANS_UPDATE(id), data);
