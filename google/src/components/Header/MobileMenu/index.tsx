import React, { FC } from 'react'
import s from './menu.module.scss'
import classNames from 'classnames';
import location from '../../../utilits/img/header/location.svg'
import gmail from '../../../utilits/img/header/gmail.svg'
import dwn from '../../../utilits/img/header/download.svg'
import call from '../../../utilits/img/header/call.svg'
import { Link } from 'react-router-dom';
import { menu } from '../../../constants/menu';

interface IMenu {
    open?: Boolean,
    close?: () => void
}

export const MobileMenu: FC<IMenu> = ({ open, close }) => {

    return (
        <div className={classNames(s.menu, open ? s.active : s.disabled)}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.contacts}>
                        <div className={s.item}>
                            <img src={location} alt="logo" />
                            <div className={s.text}>
                                <h4>г. Кокчетав, ул. Ж. Ташенова 129Б
                                </h4>
                                <span>(Рынок Восточный)</span>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={gmail} alt="logo" />
                            <div className={s.text}>
                                <h4>opt.sultan@mail.ru
                                </h4>
                                <span>На связи в любое время </span>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={call} alt="logo" />
                            <div className={s.text}>
                                <h4>Отдел продаж </h4>
                                <span>+7 (777) 490-00-91</span>
                                <span>время работы: 9:00-20:00</span>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.logo}>
                                <img src={call} alt="logo" />
                            </div>
                            <a href="#">Заказать звонок</a>
                        </div>
                    </div>
                    <div className={s.links}>
                        <h2>
                            Меню сайта:
                        </h2>
                        {
                            menu.map(({ id, path, name }) => (
                                <Link onClick={close} className={s.item} key={id+path} to={path}>
                                    {name}
                                </Link>
                            ))
                        }
                    </div>
                    <button className={s.btn}>
                       <span> Прайс-лист</span>  <img src={dwn} alt="logo" />
                    </button>
                </div>
            </div>
        </div>
    )
}
