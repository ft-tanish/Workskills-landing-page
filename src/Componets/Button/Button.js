import React from 'react'
import './Button.css'

const Button = ({ buttonText, type }) => {
    return (
        <button className={`ws-button ${type}`}>{buttonText}</button>
    )
}

export default Button