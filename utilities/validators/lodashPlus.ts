import { isNaN, isNil, isEmpty } from "lodash-es";

export const isNeo = (variable: unknown) => {
  return isNil(variable) && isNaN(variable) && isEmpty(variable);
};
