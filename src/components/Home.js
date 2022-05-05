import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TypeAnimation from 'react-type-animation';

const Home = () => {
    return (
        <div id='home' className='jumbotron' data-aos="zoom-in" data-aos-delay="100">
            <h1 className='header'>ScarRobo</h1>
            <div className='mb-2 typing-container'>
                <TypeAnimation cursor={true}
                    sequence={[
                    'Welcome to our site',
                    5000,
                    'We are the robotics club at UTSC',
                    5000,
                    'We hope to help you start your journey with robotics',
                    5000
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                />
            </div>
            <div>
                <a className='me-2' href='https://www.instagram.com/scar.robo.utsc/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faInstagram} /></a>
                <a className='me-2' href='mailto:scar_robo.utsc@outlook.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faEnvelope} /></a>
                <a className='me-2' href='https://discord.gg/Mf4ack8sEU'><FontAwesomeIcon className='social-link' border size='lg' icon={faDiscord} /></a>
            </div>
        </div>
    )
}

export default Home
