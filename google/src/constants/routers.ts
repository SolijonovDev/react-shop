import {HomePage} from '../pages/home-page'
import { CategoryPage } from '../pages/category-page';
import  React  from 'react';

interface IRouter{
  id:number;
  path:string;
  com:any,
  exact?:boolean
}
export const routers:IRouter[]=[
    {
        id:1,
        path:"/home",
        com:HomePage,
        exact:true
    },
    {
        id:2,
        path:"/category",
        com:CategoryPage,
        exact:true
    },
]