import React from 'react';
import classes from './Header.module.css';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className={classes.header}>
      <a href="index.html" class={classes.logo}><img src={logo} alt="Lien vers la page d'accueil" /></a>
      <h1>Mes films</h1>
    </div>
  )
}

export default Header
