import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import { store } from '../store/index';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

