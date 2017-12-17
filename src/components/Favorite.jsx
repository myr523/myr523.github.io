import React from 'react'

const Favorite = () => {
  return (
    <div id={ 'Favorite' } className={ 'Favorite' }>
      <h2>Favorite</h2>
      <ul>
        <li>{ 'Programming' }</li>
        <li>{ 'Traveling' }</li>
        <li>{ 'Photograph' }</li>
        <li>{ 'Music => Idol, Band' }</li>
        <li>{ 'HimeKyunFruitCan => ' }
          <a
            href={ 'http://himekyun.jp/' }
            target="_blank"
          >
            { 'Official website' }
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Favorite
