import { CSSProperties } from "react";

export const EMPTY_ARRAY = [];

export const AUTH_LOCAL_STORAGE_KEY = "APP_AUTH_KEY";

export const LODASH_CODE_EXAMPLE = `
_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }

_.partition([1, 2, 3, 4], n => n % 2);

// → [[1, 3], [2, 4]]
_.difference([2, 1], [2, 3]);
// => [1]

_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
`;

export const LODASH_CODE_EXAMPLE_BOX: CSSProperties = {
  marginTop: "1.6rem",
  borderRadius: "0.5rem",
};
