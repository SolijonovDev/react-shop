import {combineReducers} from "redux";
import {userReducer} from "./user";
import { categoryReducer } from './category';


export const rootReducer = combineReducers({
    user: userReducer,
    category:categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>