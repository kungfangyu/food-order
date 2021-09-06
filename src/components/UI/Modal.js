/*
 * @Date: 2021-08-30 14:13:11
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-08-30 19:02:02
 * @FilePath: /food-order/src/components/UI/Modal.js
 */
import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'


const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal;