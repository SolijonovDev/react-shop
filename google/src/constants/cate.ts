
interface ICate{
    id:number;
    text:string;
    path:string;
}

export const cate:ICate[]=[
    {
        id:1,
        text:"Бытовая химия",
        path:"/category/:ximiya"
    },
    {
        id:2,
        text:"Косметика и гигиена",
        path:"/category/kosmetika"
    },
    {
        id:3,
        text:"Товары для дома",
        path:"/category/house"
    },
    {
        id:4,
        text:"Товары для детей и мам",
        path:"/category/children&mother"
    },
    {
        id:5,
        text:"Посуда",
        path:"/category/tableware"
    }

]