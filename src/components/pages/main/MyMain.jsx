import React from 'react'
import style from './MyMain.module.css'
import { skills } from '../../../data/skills.data'
import Skills from '../skills/Skills'
import CButton from '../../ui/button/CButton'
import Avatar from '../../ui/avatar/Avatar'

const MyMain = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div>
            <Avatar src='./avatar.jpg'></Avatar>
        </div>
        <div>
          <h1>Dervi Vulkhorn</h1>
          <p>Начинающий веб-разработчик </p>
        </div>
      </div>
      <h2 className={style.title_skills}>Навыки</h2>
      <div className={style.card_place}>
        {skills.map(skills => (
          <Skills kye={skills.id} skills={skills}></Skills>
        ))}
      </div>
      <div className={style.floor}>
        <div className={style.contacs}>
          <h2>Контакты</h2>
          <CButton text='ВКонтакте'></CButton>
          <CButton text='Телеграм'></CButton>
          <CButton text='GitHub'></CButton>
        </div>
        <div className={style.education}>
          <h2>Образование:</h2>
          <p><strong>Институт:</strong> НИЯУ МИФИ.  </p>
          <p><strong>Кафедра:</strong> вычислительной техники.</p>
          <p><strong>Специальность:</strong> применения и эксплуатация автоматизированных систем специального
            назначения.
          </p>
        </div>
        <div className={style.education}>
          <h2>Опыт работы:</h2>
          <p>Разработка сайтов с использованием HTML, CSS и JavaScript</p>
        </div>
      </div>
      
    </div>
  )
}

export default MyMain