import photo from '../utilits/img/itms.png'

export interface IItem{
    id:number;
    photo:any;
    ml:string | number;
    name:string;
    shtkod?:string | number;
    manufacture?:string;
    brend:string;
    price:string | number;

}

export const items:IItem[]=[
    { 
        id:1,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:2,
        photo:photo,
        ml:"15X28.8",
        name:"ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:3,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:4,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:5,
        photo:photo,
        ml:"15X28.8",
        name:"ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:6,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:7,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:8,
        photo:photo,
        ml:"15X28.8",
        name:"ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
    { 
        id:9,
        photo:photo,
        ml:450,
        name:"AOS средство для мытья посуды Crystal",
        shtkod:"4604049097548",
        manufacture:"Нэфис",
        brend:"AOS",
        price:"48,76 ₸"
    },
]