import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { FC } from "react";
import { brends } from "../../../constants/cateTovarov";
import s from "./cn.module.scss";

export const CateNavbar: FC = () => {
  const [checks,setChecks]=useState<Number[]>([])
  const handleChange=(a:number)=>{
    if(checks.includes(a)){
      return setChecks(prev=>prev.filter(s=>s!==a))
    }
    setChecks(prev=>[...prev,a])
  }
  return (
    <div className={s.navbar}>
      <div className={s.brend}>
        <h2>Бренд</h2>
        <div className={s.brend_items}>
          {brends.map((v) => (
            <h5 className={s.item} key={v.id}>
              <div className={s.checkbox}>
              <Checkbox checked={checks.includes(v.id)} onChange={()=>handleChange(v.id)} name="checkedA" />
              </div>
              {v.name}
            </h5>
            
          ))}
        </div>
      </div>
    </div>
  );
};
