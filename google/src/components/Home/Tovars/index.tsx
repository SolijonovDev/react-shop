import React, { FC } from "react";
import { Tovar } from "./Tovar";
import s from "./tovars.module.scss";
import classNames from "classnames";

export const Tovars: FC = () => {
  return (
    <div className={s.tovars}>
      <div className={classNames("container", s.inner)}>
        <h1 className={s.text}>
          <span>Акционные</span> товары
        </h1>
        <div className={s.items}>
          <Tovar />
          <Tovar />
          <Tovar />
          <Tovar />
          <Tovar />
          <Tovar />
          <Tovar />
          <Tovar />
        </div>
      </div>
    </div>
  );
};
