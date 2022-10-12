import React from 'react'
import './Program.css'
import yt from '../../assets/yt.png'
import rupee from '../../assets/rupee.png'
import certificate from '../../assets/certificate.png'
import performance from '../../assets/performance.png'
import fee from '../../assets/fee.png'

const Program = () => {
    return (
        <div className='left-program'>
            <p className='progs'>
                Who is this program for?
            </p>
            <div className='program-details'>
                <div className='prog-icons'>
                    <div className='prog-card'>
                        <img src={yt} alt='' />
                        <p>
                            Unlimited Courses
                        </p>
                    </div>
                    <div className='prog-card'>
                        <img className='' src={rupee} alt='' />
                        <p>
                            Stipend upto
                        </p>
                    </div>
                    <div className='prog-card'>
                        <img src={certificate} alt='' />
                        <p>
                            Certificate of Completion
                        </p>
                    </div>
                    <div className='prog-card'>
                        <img src={performance} alt='' />
                        <p>
                            Top Performance Badge
                        </p>
                    </div>
                    <div className='prog-card'>
                        <img src={fee} alt='' />
                        <p>
                            Full Refund Fee
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program