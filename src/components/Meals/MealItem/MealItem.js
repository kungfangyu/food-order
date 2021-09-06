/*
 * @Date: 2021-08-30 11:05:46
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-08-31 18:02:02
 * @FilePath: /food-order/src/components/Meals/MealItem/MealItem.js
 */
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return(
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem;