import React from 'react'
import Card from '../Card/Card'
import './SecondPart.css'
import figma from '../../assets/figma.png';
import hojar from '../../assets/hojar.png';
import excel from '../../assets/excel.png';
import analytics from '../../assets/analytics.png';
import Program from '../Program/Program';



const SecondPart = () => {
    return (
        <div className='secnod'>
            <div class="section">

                <div class="right">
                    <p className='card-head'>
                        Frameworks & tools you will learn
                    </p>
                    <Card />
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