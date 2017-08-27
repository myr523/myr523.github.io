import React from 'react'

const Footer = () => {
  const styles = {
    bottom: 0,
    height: '5em',
    position: 'absolute',
  }

  return (
    <footer style={ styles }>
      <p><small>{ 'Made by React.js' }</small></p>
    </footer>
  )
}

export default Footer
