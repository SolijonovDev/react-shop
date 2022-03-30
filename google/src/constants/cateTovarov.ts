import ph1 from '../utilits/img/header/ct1.png'
import ph2 from '../utilits/img/header/ct2.png'
import ph3 from '../utilits/img/header/ct3.png'
import ph4 from '../utilits/img/header/ct4.png'
import ph5 from '../utilits/img/header/ct5.png'

interface ICatetovars{
    id:number;
    text:string | null;
    photo:any;
    path:string;
}

export const catetovars:ICatetovars[]=[
    {
        id:1,
        text:"Бытовая химия",
        photo:ph1,
        path:"/category/ximiya"
    },
    {
        id:2,
        text:"Косметика и гигиена",
        photo:ph2,
        path:"/category/gigiena"
    },
    {
        id:3,
        text:"Товары для дома",
        photo:ph3,
        path:"/category/house"
    },
    {
        id:4,
        text:"Товары для детей и мам",
        photo:ph4,
        path:"/category/childrens"
    },
    {
        id:5,
        text:"Посуда",
        photo:ph5,
        path:"/category/posuda"
    },
]

interface IBrand{
    id:number;
    name:string;
}

export const brends:IBrand[]=[
    {
        id:1,
        name:"Nivea",
    },
    {
        id:2,
        name:"GRIFON",
    },
    {
        id:3,
        name:"Домашний сундук",
    },
    {
        id:4,
        name:"HELP",
    },

]

// export cosnt aktsies=[
//     {
//         id:1,

//     }
// ]