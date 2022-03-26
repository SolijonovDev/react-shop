import React, { FC } from 'react'
import s from './button.module.scss'


interface IButton{
    children:React.ReactNode
}

export const ButtonStyle:FC<IButton>=({children})=> {
  return (
    <div className={s.btn}>
        {children}
    </div>
  )
}
