import React, { FC } from "react";
import s from "./tovar.module.scss";
import img from "../../../../utilits/img/header/item1.png";
import bsk from "../../../../utilits/img/header/basket.svg";
import bottle from "../../../../utilits/img/header/bottle.svg";
import { useHistory } from 'react-router-dom';

export const Tovar: FC = () => {
    const history=useHistory()
  return (
    <div className={s.tovar} onClick={()=>history.push("/category")}>
      <span className={s.popular}>ПОПУЛЯРНОЕ</span>
      <img className={s.photo} src={img} alt="Photo" />
      <p className={s.ml}>
        <img src={bottle} alt="Bottle" /> 450 ml
      </p>
      <h2 className={s.title}>AOS Ср-во для мытья посуды Апельсин+мята</h2>
      <p className={s.opisani}>Штрихкод:{"4604049097548"}</p>
      <p className={s.opisani}>Производитель:{"Нэфис"}</p>
      <p className={s.opisani}>Бренд:{"AOS"}</p>
      <div className={s.bottom}>
        <p className={s.money}>48,76 ₸</p>
        <button>
          <span>В КОРЗИНУ </span>
          <img src={bsk} alt="logo" />
        </button>
      </div>
    </div>
  );
};
