import pricePlansJson from "../data.json";
import * as fs from "fs";
import * as path from "path";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const pricePlanData = await request.json();

  const pricePlanIndex = pricePlansJson.findIndex(
    (product) => product.id === Number(id),
  );

  if (pricePlanIndex === -1) {
    return Response.json({ message: "Price plan not found" }, { status: 404 });
  }

  pricePlansJson[pricePlanIndex] = {
    ...pricePlansJson[pricePlanIndex],
    ...pricePlanData,
  };

  fs.writeFileSync(
    path.resolve(__dirname, "../data.json"),
    JSON.stringify(pricePlansJson, null, 2),
  );

  return Response.json(pricePlansJson[pricePlanIndex]);
}
