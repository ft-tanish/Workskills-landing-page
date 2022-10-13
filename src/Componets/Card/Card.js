import React from 'react'
import Button from '../Button/Button'
import './Card.css'


const Card = ({ card, changeFunction }) => {

    return (
        <div className='card' onClick={() => changeFunction()}>
            <div className='card-left'>
                <div className='counting'>
                    {card.no}
                </div>
            </div>
            <div className='card-right'>
                <p className='card-heading'>
                    {card.title}
                </p>
                <p className='card-sub-heading'>
                    {card.description}
                </p>
                <div className='card-buttons'>
                    <div className='first-btn'>
                        <Button buttonText="Project Thinking" type='card-button' />
                    </div>
                    <div>
                        <Button buttonText="Project Planning" type='card-button' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card