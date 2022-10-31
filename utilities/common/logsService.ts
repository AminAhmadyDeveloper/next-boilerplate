import { stringify } from "@helpers/jsonConvert";

export const basicLog = (data: any) => console.log(data);

export const jsonLog = (data: any) => console.log(stringify(data));
