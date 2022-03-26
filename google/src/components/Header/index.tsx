import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import s from './header.module.scss'
import { MobileMenu } from './MobileMenu'
import { Navbar } from './Navbar/Navbar'
import { Sultan } from './Sultan'
import { CategoryMenu } from './Category/index';


export const Header: FC = () => {
  const [open, setOpen] = useState<Boolean>(false)
  const [cate, setCate] = useState<Boolean>(false)
  const history = useHistory()

  const handleSearch = (): void => {
    history.push("/category")
  }
  const changeMenu = (): void => {
    if(cate){
      setCate(false)
    }
    setOpen(prev=>!prev)
  }
  const changeCategory = (): void => {
    if(open){
      setOpen(false)
    }
    setCate(prev=>!prev)
  }
  return (
    <div className={s.header}>
      <Navbar />
      <Sultan click={changeMenu} />
      <div className={s.mobile}>
        <div className={s.catalog} onClick={changeCategory}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="black" />
            <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="black" />
            <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="black" />
            <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="black" />
          </svg>
          <h4>Каталог</h4>
        </div>
        <div className={s.search} onClick={handleSearch}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5297 15.5294L12.0992 12.0928L15.5297 15.5294ZM14.0002 7.5C14.0002 9.22391 13.3154 10.8772 12.0964 12.0962C10.8775 13.3152 9.22415 14 7.50024 14C5.77634 14 4.12304 13.3152 2.90405 12.0962C1.68506 10.8772 1.00024 9.22391 1.00024 7.5C1.00024 5.77609 1.68506 4.12279 2.90405 2.90381C4.12304 1.68482 5.77634 1 7.50024 1C9.22415 1 10.8775 1.68482 12.0964 2.90381C13.3154 4.12279 14.0002 5.77609 14.0002 7.5V7.5Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <h4>Поиск</h4>
        </div>
      </div>
        <MobileMenu open={open} close={changeMenu} />
        <CategoryMenu open={cate} close={changeCategory}/>
    </div>
  )
}
