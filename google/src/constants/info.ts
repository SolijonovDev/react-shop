import location from '../utilits/img/header/location.svg'
import gmail from '../utilits/img/header/gmail.svg'

interface IInfo{
    id:number;
    logo:any;
    text:string;
    desc:string | null | undefined;
}
export const info:IInfo[]=[
    {
        id:1,
        logo:location,
        text:"г. Кокчетав, ул. Ж. Ташенова 129Б",
        desc:"(Рынок Восточный)",
    },
    {
        id:2,
        logo:gmail,
        text:"opt.sultan@mail.ru",
        desc:" На связи в любое время",
    },
    // {
    //     id:2,
    //     logo:gmail,
    //     text:"Отдел продаж"
    //     +7 (777) 490-00-91",
    //     desc:" +7 (777) 490-00-91",
    // },
]