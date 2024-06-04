export const getValueByPath = <T>(item: T, path: string): any => {
  const keys = path.split(".");
  let result: any = item;
  for (const key of keys) {
    if (result == null) break;
    result = result[key];
  }
  return result;
};
