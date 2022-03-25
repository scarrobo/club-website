import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faRobot, faUsers, faGraduationCap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import Scroll from 'react-scroll'

const Menu = () => {
    const [homeClass, setHomeClass] = useState('hover-underline-animation')
    const [aboutClass, setAboutClass] = useState('hover-underline-animation')
    const [eventsClass, setEventsClass] = useState('hover-underline-animation')
    const [gsClass, setGSClass] = useState('hover-underline-animation')
    const [teamClass, setTeamClass] = useState('hover-underline-animation')
    const offset = -80

    const removeUnderline = (handler) => handler('')
    const addUnderline = (handler) => handler('hover-underline-animation')

    return (
        <Navbar collapseOnSelect bg='light' expand="lg" className='shadow' fixed='top' data-aos="zoom-in" data-aos-delay="100">
            <div className='container'>
                <Scroll.Link to='home' className='mt-1 mb-1 me-4 brand' spy={true} offset={offset}>
                    <Navbar.Brand ><strong>ScarRobo</strong></Navbar.Brand>
                </Scroll.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Scroll.Link activeClass='underline' to='home' className={'mt-1 mb-1 me-4 ' + homeClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setHomeClass)} onSetInactive={() => addUnderline(setHomeClass)}>
                            Home&nbsp;<FontAwesomeIcon icon={faHome}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='about' className={'mt-1 mb-1 me-4 ' + aboutClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setAboutClass)} onSetInactive={() => addUnderline(setAboutClass)}>
                            About&nbsp;<FontAwesomeIcon icon={faRobot}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='getting-started' className={'mt-1 mb-1 me-4 ' + gsClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setGSClass)} onSetInactive={() => addUnderline(setGSClass)}>
                            Getting Started&nbsp;<FontAwesomeIcon icon={faGraduationCap}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='team' className={'mt-1 mb-1 me-4 ' + teamClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setTeamClass)} onSetInactive={() => addUnderline(setTeamClass)}>
                            Our Team&nbsp;<FontAwesomeIcon icon={faUsers}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='events' className={'mt-1 mb-1 me-4 ' + eventsClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setEventsClass)} onSetInactive={() => addUnderline(setEventsClass)}>
                            Events&nbsp;<FontAwesomeIcon icon={faCalendarAlt}/>
                        </Scroll.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>   
    )
}

export default Menu