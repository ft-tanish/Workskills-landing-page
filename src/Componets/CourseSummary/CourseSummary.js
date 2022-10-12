import React from 'react'
import './CourseSummary.css'
import time from '../../assets/time.png';
import trophy from '../../assets/trophy.png';
import clock from '../../assets/clock.png';

const CourseSummary = () => {
    return (
        <div className='coursesummary'>
            <div className='item'>
                <img src={clock} alt='' />
                <span>12 weeks</span>
                <span>Fully Online</span>
            </div>
            <div className='item'>
                <img src={trophy} alt='' />
                <span>Intermediate</span>
                <span>Prior Experience Mandatory</span>
            </div>
            <div className='item'>
                <img src={time} alt='' />
                <span>30th march 22</span>
                <span>Registration Deadline</span>
            </div>
        </div>
    )
}

export default CourseSummary