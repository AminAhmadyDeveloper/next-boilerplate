export const stringify = (json: any[]) => JSON.stringify(json, null, 2);
export const jsonify = (value: string) => JSON.parse(value);
