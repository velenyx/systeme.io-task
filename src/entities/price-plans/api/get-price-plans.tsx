import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";
import { PricePlan } from "~/entities/price-plans/types";

export const getPricePlans = () =>
  $api.get<PricePlan[]>(API_ENDPOINTS.PRICE_PLANS());
