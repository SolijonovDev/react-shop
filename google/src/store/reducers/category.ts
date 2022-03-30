import { items } from "../../data/items";
import { categoryAction, categoryState } from "../types/category";

const initialState:categoryState={
    items:items
}

export const categoryReducer=(state=initialState,action:categoryAction):categoryState=>{
    switch(action.type){
        default:
            return state;
    }
}