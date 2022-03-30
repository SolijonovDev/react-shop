import React from "react";
import { FC } from "react";
import s from "./cs.module.scss";
import bsk from "../../../utilits/img/header/basket.svg";
import bottle from "../../../utilits/img/header/bottle.svg";
import { useTypedSelector } from "./../../../hooks/typed";
import { useHistory } from "react-router-dom";

export const CateSection: FC = () => {
  const { items } = useTypedSelector((state) => state.category);
  const history = useHistory();

  return (
    <div className={s.section}>
      <div className={s.items}>
        {items.map((v) => (
          <div
            key={v.id}
            className={s.item}
          >
            <div className={s.img}  onClick={() => history.push("/category-item" + v.id)}>
              {/* <img src={v.photo} alt="photo" /> */}
            </div>
            <div className={s.ml}>
              <img src={bottle} alt="bottle log" />
              <span>{v.ml}</span>
            </div>
            <h4 className={s.name}>{v.name}</h4>
            <p>
              Штрихкод:<span>{v.shtkod}</span>
            </p>
            <p>
              Производитель:<span>{v.manufacture}</span>
            </p>
            <p>
              Бренд:<span>{v.brend}</span>
            </p>
            <div className={s.price}>
              <p>{v.price}</p>
              {/* <div className={s.btn}>
                  <span>В КОРЗИНУ</span>
                  <img src={bsk} alt="logo" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagination}>pagination</div>
      <p className={s.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, ut
        consectetur tempora eos enim minus consequuntur numquam reprehenderit
        sed vel.
      </p>
    </div>
  );
};
