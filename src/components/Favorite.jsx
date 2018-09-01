import React from 'react'

const Favorite = () => {
  const favoriteLists = [
    'CTF',
    'Web developing',
    'Traveling',
    'Photograph',
    'Music => Idol, Band',
  ]

  return (
    <div id={ 'Favorite' } className={ 'Favorite' }>
      <dl>
        <h2>Favorite</h2>
          <ul>
          {
            favoriteLists.map((component, index) => {
              return (
                <li className={ `Favorite-prop-${index}` } key={ index }>
                  { component }
                </li>
              )})
          }
          </ul>
      </dl>
    </div>
  )
}

export default Favorite
