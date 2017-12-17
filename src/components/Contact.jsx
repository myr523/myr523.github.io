import React from 'react'

const Contact = () => {
  return (
    <div id={ 'Contact' } className={ 'Contact' }>
      <h2>Contact</h2>
      <ul>
        <li>
          { 'Blog => ' }
          <a href={ 'myr523.hatenablog.com' } target="_blank">
            { 'http://myr523.hatenablog.com/' }
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

export default Contact
