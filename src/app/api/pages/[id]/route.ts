import pagesJson from "../data.json";
import * as fs from "fs";
import * as path from "path";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const pagesData = await request.json();

  const pageIndex = pagesJson.findIndex((product) => product.id === Number(id));

  if (pageIndex === -1) {
    return Response.json({ message: "Page not found" }, { status: 404 });
  }

  pagesJson[pageIndex] = {
    ...pagesJson[pageIndex],
    ...pagesData,
  };

  fs.writeFileSync(
    path.resolve(__dirname, "../data.json"),
    JSON.stringify(pagesJson, null, 2),
  );

  return Response.json(pagesJson[pageIndex]);
}
