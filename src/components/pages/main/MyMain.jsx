import React, { useState } from 'react'
import style from './MyMain.module.css'
import { skills } from '../../../data/skills.data'
import Skills from '../skills/Skills'
import Project from '../project/Project'
import CButton from '../../ui/button/CButton'
import Avatar from '../../ui/avatar/Avatar'
import { project } from '../../../data/project.data'

const MyMain = () => {
  //Для переключения компонентов
  const[component, setComponent]= useState(1)
  const[skill_id, setId] = useState('initial Data')

  //Функция замены компонента
  const changeComponent = ()=>{
    if(component === 1){
      setComponent(2);
    }
    else{
      setComponent(1)
    }
  }
  return (
    <div className={style.main}>
      <div className={style.back_img}>
      <div className={style.header}>
        <div>
            <Avatar src='./avatar.jpg'></Avatar>
        </div>
        <div>
          <h1>Dervi Vulkhorn</h1>
          <p>Начинающий веб-разработчик </p>
        </div>
      </div>
      </div>
      <div className={style.skill_project}>
        {component ===1 ? (<h2>Навыки</h2>):(<h2>Проекты</h2>)}
        {component ===1 ? (
          <div className={style.card_place}>
            {skills.map(skills => (
              <Skills kye={skills.id} skill_id={skills.id} skills={skills} onClick={changeComponent}></Skills>
            ))}
          </div>
        ):(
          <div className={style.card_place}>
            {project.map(project =>(
              <Project key={project.id} skill_id={skill_id.id} project={project} onClick={changeComponent}></Project>
            ))}
          </div>
        )}
      </div>
      
      <div className={style.floor}>
        <div className={style.contacs}>
          <h2>Контакты</h2>
          <CButton herf='https://vk.com/dervi_vulkhorn' target='_blank' text='ВКонтакте'></CButton>
          <CButton herf='https://t.me/@my_link_for_profile' target='_blank' text='Телеграм'></CButton>
          <CButton herf='https://github.com/DerviVulkhorn' target='_blank' text='GitHub'></CButton>
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