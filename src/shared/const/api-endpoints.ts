export const API_ENDPOINTS = {
  PRODUCTS: () => "/products",
  PRODUCTS_UPDATE: (id: string) => `/products/${id}`,
  PRICE_PLANS: () => "/price-plans",
  PRICE_PLANS_UPDATE: (id: string) => `/price-plans/${id}`,
  PAGES: () => "/pages",
  PAGES_UPDATE: (id: string) => `/pages/${id}`,
} as const;
