import React from 'react'


const Header = () => {
  return(
    <div id={ 'Header' }>
      <img
        className={ 'image-header' }
        src={ 'https://raw.githubusercontent.com/myr523/myr523.github.io/develop/src/styles/assets/s512_xmas_santa_cap1_8.png' }
        height="100"
      />
      <header className={ 'Header' }>
        <h1 className={ 'name' }>Ryusei Harada</h1>
      </header>
    </div>
  )
}

export default Header
