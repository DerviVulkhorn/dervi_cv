import React from 'react'
import style from './CButton.module.css'

const CButton = ({text, onClick, herf, target}) => {
  return (
    
    

<div className={style.wrapper} onClick={onClick}>
  <a href={herf} target={target}><span>{text}</span></a>
</div>

  )
}


export default CButton