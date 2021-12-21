import React from "react";
import s from './Display.module.css'
type PropsType = {
  countD: number
}

export const Display = (props: PropsType) => {
    
  return (
    <div className={(props.countD === 5)? s.textred: ""}>
      <div className={s.display}>{props.countD}</div>
    </div>
      )
}