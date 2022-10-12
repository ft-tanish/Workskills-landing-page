import React from 'react'
import Button from '../Button/Button'
import './Card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='card-left'>
                <div className='counting'>
                    1
                </div>
            </div>
            <div className='card-right'>
                <p className='card-heading'>
                    Foundation of data Management
                </p>
                <p className='card-sub-heading'>
                    Use design-thinking methodologies to explore various ideas, and then converge on a single idea.
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