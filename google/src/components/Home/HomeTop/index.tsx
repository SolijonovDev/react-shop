import React from "react";
import s from "./htop.module.scss";
import classNames from "classnames";
import { ButtonStyle } from "../../../utilits/button";

export const HomeTop: React.FC = () => {
  return (
    <div className={s.top}>
      <div className={classNames("container", s.inner)}>
       <div className={s.text}>
       <h1 >Бытовая химия, косметика и хозтовары</h1>
        <h3 className={s.title}>оптом по кокчетаву и области</h3>
       </div>
        <div className={s.btn}>
        <ButtonStyle>В КАТАЛОГ</ButtonStyle>
        </div>
        <div className={s.items}>
          <div className={s.item}>
            <button>+</button>
            <p>Только самые выгодные предложения</p>
          </div>
          <div className={s.item}>
            <button>+</button>
            <p>Бесплатная доставка по Кокчетаву от 10 тыс ₸</p>
          </div>
        </div>
      </div>
    </div>
  );
};
