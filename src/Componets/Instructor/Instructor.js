import React from 'react'
import "./Instructor.css"
import preview from '../../assets/preview.png'
import Button from '../Button/Button'
import rhea from '../../assets/rhea.png'
import wipro from '../../assets/wipro.png'
import freshwork from '../../assets/freshwork.png'
import ebay from '../../assets/ebay.png'

const Instructor = () => {
    return (
        <div className='instructor'>
            <img className='pre' src={preview} alt='' />
            <Button buttonText="Mentored by" type='small' />
            <div className='mentorcompany'>
                <div className='mentor'>
                    <img src={rhea} alt='' />
                    <p>
                        Rhea Punjabi
                    </p>

                </div>
                <div className='company'>
                    <img src={wipro} alt='' />

                    <img src={ebay} alt='' />
                    <img src={freshwork} alt='' />

                </div>

            </div>
            <p className='designation'>
                Career Coach & Corporate Trainer
            </p>

        </div>
    )
}

export default Instructor