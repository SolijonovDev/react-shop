
import { IItem } from './../../data/items';
export interface categoryState{
    items:IItem[]
}

export enum CategoryEnum{
    ADD_ITEM="CATEGORY_ADD_ITEM",
    DELETE_ITEM="CATEGORY_DELETE_ITEM",
}

export type categoryAdd={
    type:CategoryEnum.ADD_ITEM;
    payload:any;
}
export type categoryDeleteItem={
    type:CategoryEnum.DELETE_ITEM;
    payload:number | string;
}

export type categoryAction=categoryAdd | categoryDeleteItem;