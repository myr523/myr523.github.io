import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav className={ 'Navigation' }>
      <dl>
        <li className={ 'flex' }><Link to={ '/' }>{ 'Home' }</Link></li>
        <li className={ 'flex' }><Link to={ '/about' }>{ 'About' }</Link></li>
        <li className={ 'flex' }><Link to={ '/skills' }>{ 'Skills' }</Link></li>
        <li className={ 'flex' }><Link to={ '/favorite' }>{ 'Favorite' }</Link></li>
        <li className={ 'flex' }><Link to={ '/links' }>{ 'Links' }</Link></li>
      </dl>
    </nav>
  )
}

export default Navigation
