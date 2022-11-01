import { CSSProperties } from "react";

export const EMPTY_ARRAY = [];

export const AUTH_LOCAL_STORAGE_KEY = "APP_AUTH_KEY";

export const LODASH_CODE_EXAMPLE = `import _ from 'lodash';

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }

_.partition([1, 2, 3, 4], n => n % 2);

// → [[1, 3], [2, 4]]
_.difference([2, 1], [2, 3]);
// => [1]

_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'`;

export const USEHOOKS_TS_CODE_EXAMPLE = `import { useSsr } from 'usehooks-ts';

export default function Component() {
  const { isBrowser } = useSsr()

  return <p>{isBrowser ? 'Browser' : 'Server'}!</p>
}`;

export const TAILWIND_CODE_EXAMPLE = `<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
<div>`;

export const LODASH_CODE_EXAMPLE_BOX: CSSProperties = {
  marginTop: "3.5rem",
  borderRadius: "0.5rem",
};
