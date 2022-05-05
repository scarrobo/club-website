import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <p className='text-start'>&copy; ScarRobo 2022</p>
                    </div>
                    <div className='col-7 text-end'>
                        <a className='me-2' href='https://www.instagram.com/scar.robo.utsc/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faInstagram} /></a>
                        <a className='me-2' href='https://www.facebook.com/ScarRobo.utsc/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faFacebook} /></a>
                        <a className='me-2' href='https://twitter.com/ScarRobo' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faTwitter} /></a>
                        <a className='me-2' href='mailto:scar_robo.utsc@outlook.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faEnvelope} /></a>
                        <a className='me-2' href='https://discord.gg/Mf4ack8sEU'><FontAwesomeIcon className='social-link' border size='lg' icon={faDiscord} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
