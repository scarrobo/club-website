import React from 'react'


const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" id='about' className='mb-5 container'>
            <div className='row'>
                <div className='col-md-6 mr-2'>
                    <h1 className='section-header'># About Us</h1>
                    <hr className='my-3'/>
                    <div className='row'>
                        <div>
                            <p>
                                We are the robotics club of the University of Toronto at Scarborough. 
                                As the first robotics club at UTSC we aim to facilitate the development 
                                of interest in the field of Robotics. Our values lie in 
                                collaboration, inclusivity and application based enrichment. We hope to inspire and 
                                provide students with opportunities to generate curiosity and enhance knowledge.
                                <br/>
                                <br/>
                                Our events, targeted toward both novice and advanced robotics 
                                users, aim to give students hands on experience with robotics.
                                Sign up for our monthly news letters for interesting facts and news on upcoming events!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-center'>
                    <img className='square rounded-circle border border-3 border-dark about-logo' src='logo.png' alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default About
