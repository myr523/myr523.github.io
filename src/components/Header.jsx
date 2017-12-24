import React from 'react'


const Header = () => {
  return(
    <div id={ 'Header' }>
      <img
        className={ 'image-header' }
        src={ 'src/styles/assets/s512_xmas_santa_cap1_8.png' }
        width="100"
        height="100"
      />
      <header className={ 'Header' }>
        <h1 className={ 'name' }>Ryusei Harada</h1>
      </header>
    </div>
  )
}

export default Header
