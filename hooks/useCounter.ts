import { increment } from "@reducers/counterReducer";
import { useAppDispatch, useAppSelector } from "@store/store";

const useCounter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increase = () => dispatch(increment());

  return { count, increase };
};

export default useCounter;
