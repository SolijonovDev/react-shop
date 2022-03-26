import React, { FC } from 'react'
import { ButtonStyle } from '../../utilits/button'
import dwn from './../../utilits/img/header/download.svg'
export const Footer:FC=()=> {
  return (
    <div>
        Footer
        <ButtonStyle>Prays <img src={dwn} alt="logo" /> </ButtonStyle>
    </div>
  )
}
