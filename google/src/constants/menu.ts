
interface IMenu{
    id:number;
    path:string;
    name:string;
}

export const menu:IMenu[]=[
    {
        id:1,
        path:"/home",
        name:"О компании"
    },
    {
        id:2,
        path:"/category",
        name:"Доставка и оплата"
    },
    {
        id:3,
        path:"/category",
        name:"Возврат"
    },
    {
        id:4,
        path:"/category",
        name:"Контакты"
    }
]