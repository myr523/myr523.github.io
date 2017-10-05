import React from 'react'

const Link = () => {
  return (
    <div>
      <h2>Contact</h2>
      <ul>
        <li>
          { 'GitHub => ' }
          <a href={ 'https://github.com/myr523' } target="_blank">
            { 'myr523' }
          </a>
        </li>
        <li>
          { 'Mail   => ' }
          { 'pg.stgstar (at) gmail.com' }
        </li>
      </ul>
    </div>
  )
}

export default Link
