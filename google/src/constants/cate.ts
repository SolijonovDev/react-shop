
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

interface ICateNames{
    id:number;
    name:string;
    path:string;
}

export const CateNames:ICateNames[]=[
    {
        id:1,
        name:"Уход за телом",
        path:"/category"
    },
    {
        id:2,
        name:"Уход за руками",
        path:"/category"
    },
    {
        id:3,
        name:"Уход за ногами",
        path:"/category"
    },
    {
        id:4,
        name:"Уход за лицом",
        path:"/category"
    },
    {
        id:5,
        name:"Уход за волосами",
        path:"/category"
    },
    {
        id:6,
        name:"Средства для загара",
        path:"/category"
    },
    {
        id:7,
        name:"Средства для бритья",
        path:"/category"
    },
    {
        id:8,
        name:"Подарочные наборы",
        path:"/category"
    },
    {
        id:9,
        name:"Гигиеническая продукция",
        path:"/category"
    },
    {
        id:10,
        name:"Гигиена полости рта",
        path:"/category"
    },
    {
        id:11,
        name:"Бумажная продукция",
        path:"/category"
    },
]