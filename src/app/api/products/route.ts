import productsData from "./data.json";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(productsData);
}
