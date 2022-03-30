import React, { FC } from 'react'
import { HomeCategory } from '../../components/Home/Category'
import { HomeTop } from '../../components/Home/HomeTop'
import { Section } from '../../components/Home/Section'
import { Tovars } from '../../components/Home/Tovars'
import s from './home.module.scss'

export const HomePage:FC=()=> {
  return (
    <div className={s.home}>
      <HomeTop/>
      <Tovars/>
      <HomeCategory/>
      <Section/>
    </div>
  )
}
