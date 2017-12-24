import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav className={ 'Navigation' }>
      <dl>
        <li className={ 'flex' }><Link to={ '/' }>{ 'About Me' }</Link></li>
        <li className={ 'flex' }><Link to={ '/skills' }>{ 'Skills' }</Link></li>
        <li className={ 'flex' }><Link to={ '/favorite' }>{ 'Favorite' }</Link></li>
        <li className={ 'flex' }><Link to={ '/links' }>{ 'Links' }</Link></li>
      </dl>
    </nav>
  )
}

export default Navigation
