import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";
import { Product } from "../types";

export const updateProduct = (id: string, data: Partial<Product>) =>
  $api.put(API_ENDPOINTS.PRODUCTS_UPDATE(id), data);
