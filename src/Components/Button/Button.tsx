import React from "react";
import s from './Button.module.css'

type PropsType= {
  title: string
  callBack: ()=> void
  count: number
}

export const Button = (props: PropsType) => {
  let style = false
  if (props.count === 5 && props.title === "inc"){
    style = true
  } 
  if (props.count === 0 && props.title === "reset"){
    style = true
  } 
  return (
    <button 
      className={s.body} 
      onClick={()=>props.callBack()} 
      disabled={style}>
      {props.title} 
    </button>
  )
}