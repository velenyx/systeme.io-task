import productsJson from "../data.json";
import * as fs from "fs";
import * as path from "path";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const productData = await request.json();

  const productIndex = productsJson.findIndex(
    (product) => product.id === Number(id),
  );

  if (productIndex === -1) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  productsJson[productIndex] = {
    ...productsJson[productIndex],
    ...productData,
  };

  fs.writeFileSync(
    path.resolve(__dirname, "../data.json"),
    JSON.stringify(productsJson, null, 2),
  );

  return Response.json(productsJson[productIndex]);
}
