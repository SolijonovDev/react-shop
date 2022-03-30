import React, { FC, useEffect } from "react";
import { CateNavbar } from "../../components/Category/CateNavbar";
import { CateSection } from "../../components/Category/CateSection";
import { Header } from "../../components/Category/Header";
import s from "./cate.module.scss";
import classNames from "classnames";

export const CategoryPage: FC = () => {
  useEffect(()=>{
      window.scroll(0,0)
  },[])
  return (
    <div className={s.category}>
      <div className={classNames("container", s.inner)}>
        {/* <Header /> */}
        <CateNavbar />
        <CateSection />
      </div>
    </div>
  );
};
