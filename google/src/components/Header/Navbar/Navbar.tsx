import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from '../../../constants/menu'
import mail from '../../../utilits/img/header/gmail.svg'
import location from '../../../utilits/img/header/location.svg'
import s from './navbar.module.scss'

export const Navbar: FC = () => {
    return (
        <div className={s.navbar}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.left}>
                        <a href="#">
                            <img src={location} alt="logo" />
                            <h4>
                                г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                                <span>(Рынок Восточный)</span>
                            </h4>
                        </a>
                        <a href='mailto:opt.sultan@mail.ru'>
                            <img src={mail} alt="logo" />
                            <h4>
                                opt.sultan@mail.ru <br />
                                <span> На связи в любое время</span>
                            </h4>
                        </a>
                    </div>
                    <ul className={s.right}>
                        {
                            menu.map(({ id, path, name }) => (
                                <li key={id+path} className={s.item}>
                                    <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
