import { increment, resetCount } from "@reducers/counterReducer";
import { useAppDispatch, useAppSelector } from "@store/store";

const useCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increase = () =>
    count < 99 ? dispatch(increment()) : dispatch(resetCount());

  return { count, increase };
};

export default useCounter;
