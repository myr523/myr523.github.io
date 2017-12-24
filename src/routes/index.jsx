import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Favorite from '../components/Favorite.jsx'
import Skills from '../components/Skills.jsx'
import Links from '../components/Links.jsx'
import Footer from '../components/Footer.jsx'
import Navigation from '../components/Navigation'

const Routes = () => {
  return (
    <Router>
      <Route>
        <div>
          <Navigation />
          <Header />
          <main className={ 'container' }>
            <Route path={ '/' } component={ About } exact />
            <Route path={ '/skills' } component={ Skills } exact />
            <Route path={ '/favorite' } component={ Favorite } exact />
            <Route path={ '/links' } component={ Links } exact />
          </main>
          <Footer />
        </div>
      </Route>
    </Router>
  )
}

export default Routes
