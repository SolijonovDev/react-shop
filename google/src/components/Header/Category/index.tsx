import React, { FC } from 'react'
import s from './cate.module.scss'
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { menu } from '../../../constants/menu';

interface ICate {
    open?: Boolean,
    close?: () => void
}

export const CategoryMenu: FC<ICate> = ({ open, close }) => {
    return (
        <div className={classNames(s.menu, open ? s.active : s.disabled)}>
            <div className="container">
                <div className={s.inner}>
                <h2>Category</h2>
                    <div className={s.links}>
                        {
                            menu.map(({ id, path, name }) => (
                                <Link onClick={close} className={s.item} key={id} to={path}>
                                  Item
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
