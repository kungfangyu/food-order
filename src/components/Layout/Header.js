/*
 * @Date: 2021-08-29 00:45:26
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-06 20:10:39
 * @FilePath: /food-order/src/components/Layout/Header.js
 */
import React, {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import mealImg from '../../assets/meals.jpg'


const Header = (props) => {
  return(
    <Fragment>
      <header className={classes.header}>
        <h2>Thai Ho Ja 泰式料理</h2>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="A table of full delicious food!"/>
      </div>
    </Fragment>
  )
}

export default Header;