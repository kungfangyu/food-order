/*
 * @Date: 2021-08-29 01:03:28
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-06 20:18:13
 * @FilePath: /food-order/src/components/Layout/HeaderCartButton.js
 */
import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) =>{
  const[btnIsHighlight, setBtnIsHighlight] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const btnClass = `${classes.button} ${btnIsHighlight ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setBtnIsHighlight(true)

    const timer = setTimeout(() => {
      setBtnIsHighlight(false)
    }, 300);

    return () => clearTimeout(timer)
    
  }, [items])

  return(
    <button className={btnClass} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>購物車</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;