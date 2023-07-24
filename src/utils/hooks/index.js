import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRegularHook = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const ref = useRef();
  const dateNow = new Date();

  return {
    ref,
    dispatch,
    reduxState,
    dateNow,
  };
};
