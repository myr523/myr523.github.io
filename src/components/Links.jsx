import React from 'react'

const Links = () => {
  return (
    <div id={ 'Links' } className={ 'Links' }>
      <dl>
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
              { '@myr523' }
            </a>
          </li>
          <li>
            { 'Mail   => ' }
            <a href={ 'mailto:hrd@myr523.net' }>
              { 'hrd@myr523.net' }
            </a>
          </li>
        </ul>
      </dl>
    </div>
  )
}

export default Links
