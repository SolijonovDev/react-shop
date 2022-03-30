import React, { FC } from 'react'
import { ButtonStyle } from '../../utilits/button'
import dwn from './../../utilits/img/header/download.svg'
import s from './footer.module.scss'
import  classNames  from 'classnames';

export const Footer:FC=()=> {
  return (
    <div className={s.footer}>
       <div className={classNames("container",s.inner)}>
       Footer
        <ButtonStyle>Prays <img src={dwn} alt="logo" /> </ButtonStyle>
       </div>
    </div>
  )
}
