import React, { useState } from "react";
import { FC } from "react";
import s from "./ch.module.scss";
import { Link } from "react-router-dom";
import menuLogo from '../../../utilits/img/menu.svg'
import menuLogo2 from '../../../utilits/img/menu2.svg'
import { CateNames } from "../../../constants/cate";
type Bread = {
  id: number;
  name: string;
  path?: string;
};
const bread: Bread[] = [
  { id: 1, name: "Главная", path: "/home" },
  { id: 1, name: "Косметика и гигиена" },
];
type Btns={
  id:number;
  logo:any;
}
const btns:Btns[] = [
  {
    id:1,logo:menuLogo,
  },
  {
    id:2,logo:menuLogo2,
  }
]
export const Header: FC = () => {
  const [menu,setMenu]=useState<Number>(1)
  return (
    <div className={s.header}>
      <div className={s.bread}>
        {bread.map((v) => (
          <React.Fragment key={v.id}>
            {v.path ? (
              <Link className={s.item} to={v.path}>
                {v.name}
              </Link>
            ) : (
              <span>{v.name}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={s.text}>
        <h2 className={s.left}>Косметика и гигиена</h2>
        <div className={s.right}>
           <div className={s.sort}>
            <h2>Сортировка:</h2>
            <select value="name">
              <option value="name">Название</option>
              <option value="price">цена</option>
            </select>
           </div>
           <div className={s.btns}>
             {btns.map(v=>(
               <button className={menu===v.id? s.active:""} key={v.id} onClick={()=>setMenu(v.id)}>
                 <img src={v.logo} alt="logo" />
               </button>
             ))}
           </div>
        </div>
      </div>
      <div className={s.items}>
        {
          CateNames.map(v=>(
            <Link to={v.path} key={v.id} className={s.item}>
               <span>{v.name}</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
};
