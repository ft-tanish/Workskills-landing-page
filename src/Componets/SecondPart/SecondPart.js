import React, { useState } from 'react'
import Card from '../Card/Card'
import './SecondPart.css'
import figma from '../../assets/figma.png';
import hojar from '../../assets/hojar.png';
import excel from '../../assets/excel.png';
import analytics from '../../assets/analytics.png';
import Program from '../Program/Program';
import CardData from '../Card/CardData';


const SecondPart = () => {
    const [dataOfCard, setDataofCard] = useState(0)

    const cardChange = () => {
        if (dataOfCard === CardData.length - 1) {
            setDataofCard(0)
        } else {
            setDataofCard(dataOfCard + 1)
        }
    }
    return (
        <div className='secnod'>
            <div class="section">

                <div class="right" >
                    <p className='card-head'>
                        Frameworks & tools you will learn
                    </p>
                    <Card card={CardData[dataOfCard]} changeFunction={cardChange} style={{ transition: "all 4s ease-in-out" }} />
                    <div className='tools'>
                        <div className='icon'><img src={hojar} alt='' />
                            <p>Hojar</p></div>
                        <div className='icon'><img src={figma} alt='' />
                            <p>Figma</p></div>
                        <div className='icon'><img src={excel} alt='' />
                            <p>Excel</p></div>
                        <div className='icon'><img src={analytics} alt='' />
                            <p>Google Analytics</p></div>

                    </div>

                </div>
                <div className="left">
                    <Program />
                </div>
            </div>
        </div >
    )
}

export default SecondPart