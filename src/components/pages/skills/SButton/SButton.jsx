//raface
import React from 'react'
import style from './SButton.module.css'

const SButton = ({text, onClick, herf, target}) => {
  return (
    <div onClick={onClick}>
    <div>
      <button class={style.btn} href={herf} target={target}>
        <svg viewBox="0 8 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>{text}</span>
      </button>
    </div>
  </div>
  )
}

export default SButton