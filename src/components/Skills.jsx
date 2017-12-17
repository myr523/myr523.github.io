import React from 'react'

const Skills = () => {
  const skillList = [
    'JavaScript',
    'Clang',
    'PHP',
    'Linux'
  ]
  const studyingList = [
    'Python',
    'Golang',
    'React',
    'Network Security',
    'HTML/CSS'
  ]

  return (
    <div id={ 'Skills' } className={ 'Skills' }>
      <h2 className={ 'skills-parent' }>Skills</h2>
      <ul>
      {
        skillList.map((component, index) => {
          return (
            <li className={ 'skills-prop' } key={ index }>
              { component }
            </li>
          )})
      }
      </ul>

      <h2 className={ 'studying-parent' }>Studying</h2>
      <ul>
      {
        studyingList.map((component, index) => {
          return (
            <li className={ 'studying-prop' } key={ index }>
              { component }
            </li>
          )})
      }
      </ul>
    </div>
  )
}

export default Skills
