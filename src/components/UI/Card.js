/*
 * @Date: 2021-08-30 10:59:48
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-08-30 11:03:14
 * @FilePath: /food-order/src/components/UI/Card.js
 */
import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
  return(
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default Card;