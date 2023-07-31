import React from 'react'
import style from './Skills.module.css'
import SButton from './SButton/SButton'

const Skills = ({skills}) => {
  return (
    <div key={skills.id} className={style.item}>
          <div 
            className={style.image}
            style={{
              backgroundImage:`url(${skills.image})`
            }}>
          </div>
          <div className={style.info}>
            <h2>{skills.name_skills}</h2>
            <p>{skills.discription}</p>
            <SButton text='Посмотреть проекты'></SButton>
          </div>
    </div>
  )
}

export default Skills