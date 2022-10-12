import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Main.css'
import star from "../../assets/star.png"
import CourseSummary from '../CourseSummary/CourseSummary'
import Button from '../Button/Button'
import Instructor from '../Instructor/Instructor'

const Main = () => {
    return (
        <div className='container' >
            <Navbar />
            <div class="section">

                <div class="right">
                    <h1 className='heading'>
                        Copywriting 101
                    </h1>
                    <p className='sub-heading'>
                        Build a real product with a team of frontend developers, backend
                        developers
                    </p>
                    <div className='rating'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <span className='average'>4.9</span>
                        <span className='count'>1200 ratings</span>
                    </div>
                    <CourseSummary />
                    <Button buttonText="Enroll Now @ 499/-" />
                    <p className='sub-heading'>
                        <strong>547</strong> people enrolled in last 24hrs
                    </p>
                </div>
                <div className="left">
                    <Instructor />
                </div>
            </div>

        </div>
    )
}

export default Main