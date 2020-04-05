import React from 'react'
import './style.scss'

const PopUp = ({ text, closePopUp }) => {
  return (
    <div className="popup-container">
      <div className="popup-background">
        <div className="popup-text">{text}</div>
        <button className="popup-button" onClick={closePopUp}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default PopUp
