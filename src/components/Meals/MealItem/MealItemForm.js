/*
 * @Date: 2021-08-30 11:27:18
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-06 20:15:41
 * @FilePath: /food-order/src/components/Meals/MealItem/MealItemForm.js
 */
import React, { useRef, useState } from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)
  
  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} 
        label="數量" 
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>新增</button>
      {!amountIsValid && <p>請出輸入有效的數量（1-5）</p>}
    </form>
  )
}

export default MealItemForm;