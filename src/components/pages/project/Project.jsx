import React from 'react'
import style from './Project.module.css'
import SButton from '../skills/SButton/SButton'

const Project = ({project, onClick}) => {
  return (
    <div key={project.id} className={style.item}>
          <div>
            <h2>{project.name_progect}</h2>
            <div 
            className={style.image}
            style={{
              backgroundImage:`url(${project.image})`
            }}>
          </div>
          </div>
          <div className={style.info}>
            <h3>Клиентская часть: {project.fronted}</h3>
            <h3>Серверная часть: {project.backend}</h3>
            <SButton onClick={onClick} text='Перейти на сайт'></SButton>
          </div>
    </div>
  )
}

export default Project