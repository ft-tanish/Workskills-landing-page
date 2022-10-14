import React from 'react'
import './Program.css'
import yt from '../../assets/yt.png'
import rupee from '../../assets/rupee.png'
import certificate from '../../assets/certificate.png'
import performance from '../../assets/performance.png'
import fee from '../../assets/fee.png'
import Button from '../Button/Button'

const Program = () => {
    return (
        <div className='left-program'>
            <div className='progs'>
                Who is this program for?
            </div>
            <div className='program-details'>
                <div className='prog-icons'>
                    <div className='prog-card'>
                        {/* <img src={yt} alt='' /> */}
                        <span style={{backgroundImage:`url(${yt})`}}></span>
                        <p>
                            Unlimited Courses
                        </p>
                    </div>
                    <div className='prog-card'>
                        {/* <img className='' src={rupee} alt='' /> */}
                        <span style={{backgroundImage:`url(${rupee})`}}></span>
                        <p>
                            Stipend upto
                        </p>
                    </div>
                    <div className='prog-card'>
                        {/* <img src={certificate} alt='' /> */}
                        <span style={{backgroundImage:`url(${certificate})`}}></span>
                        <p>
                            Certificate of Completion
                        </p>
                    </div>
                    <div className='prog-card'>
                        {/* <img src={performance} alt='' /> */}
                        <span style={{backgroundImage:`url(${performance})`}}></span>
                        <p>
                            Top Performance Badge
                        </p>
                    </div>
                    <div className='prog-card'>
                        {/* <img src={fee} alt='' /> */}
                        <span style={{backgroundImage:`url(${fee})`}}></span>
                        <p>
                            Full Refund Fee
                        </p>
                    </div>
                </div>
            </div>
            <Button buttonText="Enroll Now"/>
        </div>
    )
}

export default Program