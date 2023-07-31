import React from 'react'
import style from './Avatar.module.css'

const Avatar = ({src}) => {
  return (
    <div className={style.image_decor}>
    <img src={src}/>
    </div>
  )
}

export default Avatar