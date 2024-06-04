import { $api } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/const/api-endpoints";
import { Product } from "~/entities/products/types";

export const getProducts = () => $api.get<Product[]>(API_ENDPOINTS.PRODUCTS());
