import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import Article from './Article'
import PopUp from './PopUp'
import { weddingArticle } from '../lib/literals'
import { formKey } from '../config'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const Main = props => {
  const initialState = { name: '', email: '', guests: '', message: '' }
  const [showPopup, setShowPopup] = useState(false)
  const [data, setData] = useState(initialState)

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setData({
      ...data,
      [name]: value,
    })
  }

  const handlePopup = () => {
    setShowPopup(false)
  }

  const handleReset = () => {
    setData(initialState)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`https://submit-form.com/${formKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(setShowPopup(true), setData(initialState))
      .catch(function(error) {
        console.error(error)
      })
  }

  return (
    <Fragment>
      <div
        ref={props.setWrapperRef}
        id="main"
        style={props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Article
          id="intro"
          title="La Boda"
          picture={pic01}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>{weddingArticle.p1}</p>
          <p>{weddingArticle.p2}</p>
        </Article>
        <Article
          id="work"
          title="Ubicación"
          picture={pic02}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>{weddingArticle.p1}</p>
          <p>{weddingArticle.p2}</p>
        </Article>
        <Article
          id="about"
          title="Menú"
          picture={pic03}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>{weddingArticle.p1}</p>
        </Article>
        <Article
          id="contact"
          title="Contacto"
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Nombre y Apellidos</label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="field half first">
              <label htmlFor="guests">Nº Asistentes</label>
              <input
                type="number"
                name="guests"
                id="guests"
                value={data.guests}
                onChange={handleInputChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="menu">Menú</label>
              <input
                type="text"
                name="menu"
                id="menu"
                value={data.menu}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">
                Mensaje (alergias, otros asistentes, restricciones...)
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={data.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </form>
          <ul className="actions">
            <li>
              <button onClick={handleSubmit} type="submit" className="special">
                Enviar Mensaje
              </button>
            </li>
            <li>
              <button type="reset" onClick={handleReset}>
                Borrar
              </button>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
        </Article>
      </div>
      {showPopup && (
        <PopUp text="Mensaje enviado correctamente" closePopUp={handlePopup} />
      )}
    </Fragment>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
