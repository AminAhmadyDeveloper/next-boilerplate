import { useEffect } from "react";
import { EMPTY_ARRAY } from "@constants/CApp";

const useAsyncEffect = (
  asyncCallBack: () => Promise<unknown>,
  dependencies: unknown[] = EMPTY_ARRAY
) => {
  useEffect(() => {
    asyncCallBack();
  }, dependencies);
};

export default useAsyncEffect;
