'use client'
import React from 'react';
import s from './button.module.scss'

interface ButtonProps {
   text: string
   callback?: ()=>void
}
const Button:React.FC<ButtonProps> = ({text, callback= ()=>{}}) => {
   return <button className={s.btn} onClick={()=>{callback()}}>{text}</button>
}

export default Button;