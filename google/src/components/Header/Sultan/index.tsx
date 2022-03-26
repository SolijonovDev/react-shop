import React, { FC } from 'react'
import s from './sultan.module.scss'
import slnLogo from '../../../utilits/img/header/logo.svg'
import ctgLogo from '../../../utilits/img/header/catalog.svg'
import downLogo from '../../../utilits/img/header/download.svg'
import srchLogo from '../../../utilits/img/header/search.svg'
import bctLogo from '../../../utilits/img/header/backet.svg'
import girlPhoto from '../../../utilits/img/header/girl.png'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames'

interface ISultan{
    click?:()=>void
}

export const Sultan: FC<ISultan> = ({click}) => {
    return (
        <div className={s.sultan}>
            <div className="container">
                <div className={s.inner}>
                    <div onClick={click} className={s.mobileMenu}>
                        <MenuIcon color="primary" />
                    </div>
                    <Link to="/home" className={classNames(s.logo)}>
                        <img src={slnLogo} alt="logo" />
                        <h2>Султан</h2>
                    </Link>
                    <button className={classNames(s.catalog,s.desktop)}>
                        <h4>Каталог</h4>
                        <img src={ctgLogo} alt="logo" />
                    </button>
                    <div className={classNames(s.search,s.desktop)}>
                        <input placeholder='Поиск...' type="text" />
                        <div className={s.img}>
                            <img src={srchLogo} alt="logo" />
                        </div>
                    </div>
                    <div className={classNames(s.admin,s.desktop)}>
                        <div className={s.text}>
                            <a href='tel+998909069262'>+998 90 906 92 62</a>
                            <p>время работы: 9:00-20:00</p>
                            <div><a href="">Заказать звонок</a></div>
                        </div>
                        <Badge overlap="circular" color="primary" variant="dot">
                            <img src={girlPhoto} alt="Photo" />
                        </Badge>
                    </div>
                    <div className={classNames(s.prays,s.desktop)}>
                        <p>Прайс-лист</p>
                        <img src={downLogo} alt="logo" />
                    </div>
                    <div className={s.backet}>
                        <Badge badgeContent={4} color="primary">
                            <img src={bctLogo} alt="badge" />
                        </Badge>
                        <div className={classNames(s.text,s.desktop)}>
                            <h4>Корзина</h4>
                            <p>10$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}