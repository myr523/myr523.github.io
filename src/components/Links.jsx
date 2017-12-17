import React from 'react'

const Links = () => {
  return (
    <div id={ 'Links' } className={ 'Links' }>
      <h2>Links</h2>
      <ul>
        <li>
          { 'Blog => ' }
          <a href={ 'http://myr523.hatenablog.com/' } target="_blank">
            { 'May -> Proof' }
          </a>
        </li>
        <li>
          { 'GitHub => ' }
          <a href={ 'https://github.com/myr523' } target="_blank">
            { 'myr523' }
          </a>
        </li>
        <li>
          { 'Mail   => ' }
          { 'hrd (at) myr523.net' }
        </li>

      </ul>
    </div>
  )
}

export default Links
