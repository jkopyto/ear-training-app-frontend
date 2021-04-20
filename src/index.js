import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Root from './Root'

/* <--ProjApkInt-->
*
*  Punkt wyjściowy dla całej aplikacji.
*  Wyszukuję div o id "root" i umieszczam w nim komponent Root.
*  Importuję także tutaj plik index.scss, który jest punktem wyjściowym,
*  dla wszystkich arkuszy stylów SCSS
*/
ReactDOM.render (
  <Root />,
  document.getElementById('root')
)
