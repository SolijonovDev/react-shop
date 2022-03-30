import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./cate.module.scss";
import photo from "../../../utilits/img/girl.png";
import "swiper/swiper.scss";
import "swiper/components/navigation";
import "swiper/components/pagination";

import { catetovars } from "./../../../constants/cateTovarov";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { ButtonStyle } from "../../../utilits/button";

export const HomeCategory = () => {
  const history = useHistory();
  return (
    <div className={s.category}>
      <div className={classNames("container", s.inner)}>
        <div className={s.cate_tovars}>
          <h2 className={s.text}>
            <span>категории</span> товаров
          </h2>
          <p className={s.desc}>10 000+ ходовых позиций по спецмальным ценам</p>
          <Swiper className="mySwiper" slidesPerView={5} spaceBetween={20}>
            {catetovars.map((v) => (
              <SwiperSlide
                onClick={() => history.push(v.path)}
                className={s.item}
                key={v.path}
              >
                <div className={s.img_block}>
                  <img src={v.photo} alt="photo" />
                </div>
                <p>{v.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={s.aktsi}>
          <Swiper className="mySwiper" slidesPerView={1}>
            {catetovars.map((it) => (
              <SwiperSlide
                onClick={() => history.push(it.path)}
                className={s.item}
                key={it.path}
              >
                <div className={s.text}>
                  <p className={s.title}>Акция действует до 04/09/22</p>
                  <h2>Название Акции</h2>
                  <p className={s.desc}>
                    Условия акции в пару строк, Условия акции в пару строк,
                    Условия акции в пару строк
                  </p>
                  <div className={s.btn}>
                    <ButtonStyle>ПРИНЯТЬ УЧАСТИЕ</ButtonStyle>
                  </div>
                </div>
                <div className={s.photo}>
                  {/* <img src={photo} alt="photo" /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
