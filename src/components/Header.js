import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1 className="main-title">Rosana & Miguel</h1>
        <p>4-7-2020</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Boda
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('location')
            }}
          >
            Ubicación
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('accommodation')
            }}
          >
            Alojamiento
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Confirmación
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
