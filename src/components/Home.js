import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import TypeAnimation from 'react-type-animation';

const Home = () => {
    return (
        <div id='home' className='jumbotron' data-aos="zoom-in" data-aos-delay="100">
            <h1 className='header'>ScarRobo</h1>
            <div className='mb-2 typing-container'>
                <TypeAnimation cursor={true}
                    sequence={[
                    'Welcome, to ScarRobo',
                    5000,
                    'Heh, this is a pretty cool typing thingy',
                    5000,
                    'I will fix this later :)',
                    5000
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                />
            </div>
            <div>
                <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faInstagram} /></a>
                <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faFacebook} /></a>
                <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faTwitter} /></a>
                <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faLinkedin} /></a>
                <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faDiscord} /></a>
                <a href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faComment} /></a>
            </div>
        </div>
    )
}

export default Home
