import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'

import Article from './Article'
import PopUp from './PopUp'
import { formKey } from '../config'

import seccionboda2 from '../images/seccionboda2.png'
import room from '../images/room.jpg'

const styles = {
  Links: {
    color: 'lightBlue',
    textDecoration: 'none',
  },
  Disabled: { color: '#ffffff80' },
}

const Main = props => {
  const initialState = {
    name: '',
    email: '',
    guests: '',
    message: '',
    bus: '',
    location: '',
  }
  const [showPopup, setShowPopup] = useState(false)
  const [data, setData] = useState(initialState)
  const [locationAnswer, setLocationAnswer] = useState(false)
  const [text, setText] = useState('')
  const src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20886.785010167394!2d-0.5527535243368369!3d38.904793049197885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf86b8494bd7ed4cb!2sAlquer%C3%ADa+de+Galim!5e0!3m2!1ses!2ses!4v1484569267148'

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
    document
      .getElementsByName('location')
      .forEach(location => (location.checked = false))
    document.getElementsByName('bus').forEach(bus => (bus.checked = false))

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
      .then(
        setText('Mensaje enviado correctamente'),
        setShowPopup(true),
        setData(initialState)
      )
      .catch(function(error) {
        setText('Ha habido un error, por favor, reenvía el formulario')
        setShowPopup(true)
        console.error(error)
      })
  }

  const handleRadioButton = ev => {
    console.log(ev.target.value)
    if (ev.target.value === 'yes') {
      setLocationAnswer(true)
    } else if (ev.target.value === 'no') {
      setData({ ...data, location: '' })
      document
        .getElementsByName('location')
        .forEach(location => (location.checked = false))
      setLocationAnswer(false)
    }
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
          picture={seccionboda2}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>
            No era ésta la idea inicial pero, al igual que tú, tras lo sucedido
            los últimos meses, hemos tenido que reinventarnos. Si estás leyendo
            esto, significa que para nosotros eres una persona importante. Tan
            importante que nos gustaría{' '}
            <b>compartir contigo este dia tan especial</b>.
          </p>
          <p>
            Hemos pensado, que tras haber cumplido con el <b>#quédateencasa</b>,
            todos nos merecemos un <b>#yomevoydefiesta</b>. Así que, te
            invitamos a nuestra boda el próximo 4 de Julio en L'Alquería de
            Galim, <b>L'Olleria</b> (Valencia), para regalarnos un día de
            emociones, reencuentros y fiesta muy merecido.
          </p>
        </Article>
        <Article
          id="location"
          title="Ubicación"
          location={true}
          src={src}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>
            Y como una boda no sería posible sin un lugar especial que nos diera
            cobijo a todos, arriba os dejamos la ubicación de ese maravilloso
            rinconcito que nos va a permitir disfrutar como niños.
          </p>
          <p>
            Si, además, queréis conocerlo más en detalle os dejamos su web para
            que podáis examinarlo a fondo: <br />
            <a
              style={styles.Links}
              href="http://alqueriadegalim.com/"
              target="_blank"
            >
              alqueriadegalim.com
            </a>
          </p>
        </Article>
        <Article
          id="accommodation"
          title="Alojamiento"
          picture={room}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onClick={() => {
            props.onCloseArticle()
          }}
        >
          <p>
            Como sabemos que también puede darse el caso de que quieras alargar
            tu estancia en estas maravillosas tierras un día más, aquí te
            dejamos una opción para hospedarte en caso de requerirlo:
            <br />
            <a
              style={styles.Links}
              href="http://complejogasaqui.com/"
              target="_blank"
            >
              complejogasaqui.com
            </a>
          </p>
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
            <div className="field half first">
              <label>Bus:</label>
              <input
                type="radio"
                name="bus"
                id="yes"
                value="yes"
                onChange={handleInputChange}
                onClick={handleRadioButton}
              />
              <label htmlFor="yes">Sí</label>
              <br />
              <input
                type="radio"
                name="bus"
                id="no"
                value="no"
                onChange={handleInputChange}
                onClick={handleRadioButton}
              />
              <label htmlFor="no">No</label>
            </div>
            <div className="field half">
              <label>Salida desde:</label>
              <input
                type="radio"
                name="location"
                id="xativa"
                value="xativa"
                onChange={handleInputChange}
                disabled={!locationAnswer}
              />
              <label
                style={!locationAnswer ? styles.Disabled : null}
                htmlFor="xativa"
              >
                Xátiva
              </label>
              <br />
              <input
                type="radio"
                name="location"
                id="canals"
                value="canals"
                onChange={handleInputChange}
                disabled={!locationAnswer}
              />
              <label
                style={!locationAnswer ? styles.Disabled : null}
                htmlFor="canals"
              >
                Canals
              </label>
            </div>
            <div className="field">
              <label htmlFor="message">
                Alergias, otros asistentes, restricciones...
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
      {showPopup && <PopUp text={text} closePopUp={handlePopup} />}
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
