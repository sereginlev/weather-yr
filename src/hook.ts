import { RootState } from './redux/store';
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from "redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;