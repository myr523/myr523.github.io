import React from 'react'
import Navigation from './Navigation.jsx'


const Header = () => {
  return(
    <header id={ 'Header' } className={ 'header' }>
      <h1>Ryusei Harada</h1>
      <Navigation />
    </header>
  )
}

export default Header
