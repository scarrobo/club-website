import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <p className='text-start'>&copy; ScarRobo 2022</p>
                    </div>
                    <div className='col-md-7 text-end'>
                        <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faInstagram} /></a>
                        <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faFacebook} /></a>
                        <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faTwitter} /></a>
                        <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faLinkedin} /></a>
                        <a className='me-2' href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faDiscord} /></a>
                        <a href='/#'><FontAwesomeIcon className='social-link' border size='lg' icon={faComment} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
