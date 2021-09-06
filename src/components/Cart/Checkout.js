/*
 * @Date: 2021-09-05 22:41:38
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-06 20:16:31
 * @FilePath: /food-order/src/components/Cart/Checkout.js
 */
import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputIsValidate, setFormInputIsValidate] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })

  const isEmpty = value => value.trim() === '' ;
  const isThreeChars = value => value.trim().length === 3 ;


  const onConfirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;

    const enteredNameIsValid =  !isEmpty(enteredName);
    const enteredStreetIsValid =  !isEmpty(enteredStreet);
    const enteredCityIsValid =  !isEmpty(enteredCity);
    const enteredPostalCodeIsValid =  isThreeChars(enteredPostalCode);

    setFormInputIsValidate({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

    if(!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostalCode
    })
  }

  const nameClassControl = `${classes.control} ${formInputIsValidate.name ? '' : classes.invalid}`;
  const streetClassControl = `${classes.control} ${formInputIsValidate.street ? '' : classes.invalid}`;
  const postalCodeClassControl = `${classes.control} ${formInputIsValidate.postalCode ? '' : classes.invalid}`;
  const cityClassControl = `${classes.control} ${formInputIsValidate.city ? '' : classes.invalid}`;



  return(
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div className={nameClassControl}>
        <label htmlFor='name'>姓名</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputIsValidate.name && <p>請輸入姓名</p>}
      </div>
      <div className={streetClassControl}>
        <label htmlFor='street'>地址</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputIsValidate.street && <p>請輸入地址</p>}
      </div>
      <div className={postalCodeClassControl}>
        <label htmlFor='postal'>郵遞區號</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputIsValidate.postalCode && <p>請輸入郵遞區號(3碼)</p>}
      </div>
      <div className={cityClassControl}>
        <label htmlFor='city'>城市</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputIsValidate.city && <p>請輸入城市</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          取消
        </button>
        <button className={classes.submit} onSubmit={onConfirmHandler}>確認</button>
      </div>
    </form>
  );
}

export default Checkout;
