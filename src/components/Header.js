import React from 'react';
import classes from './Header.module.css';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="index.html" className={classes.logo}><img src={logo} alt="Lien vers la page d'accueil" /></a>
      <h1>Mes films</h1>
    </header>
  )
}

export default Header
