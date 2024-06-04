import productsData from "./data.json";

export async function GET() {
  return Response.json(productsData);
}
