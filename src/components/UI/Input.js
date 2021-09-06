/*
 * @Date: 2021-08-30 11:41:19
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-08-31 17:25:26
 * @FilePath: /food-order/src/components/UI/Input.js
 */
import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  )
}) 

export default Input;