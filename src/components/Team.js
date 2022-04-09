import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card, Row, Col } from 'react-bootstrap'

const Member = ({member}) => {
    return (
        <Col>
            <Card border="light" className='card'>
                <Card.Img className='square rounded-circle border border-3 border-dark card-img mt-3' variant='top' src={member.image} />
                <Card.Body>
                    <div className='text-center'>
                        {member.links.length > 0? member.links.map(link => <a key={link.type} className='ms-2 me-2' target={'_blank'} href={link.link} rel='noreferrer'>{link.type === 'github'? <FontAwesomeIcon className='card-social-link' border size='lg' icon={faGithub} />:<FontAwesomeIcon className='card-social-link' border size='lg' icon={faLinkedin} />}</a>):<></>}
                    </div>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text><i>{member.role}</i></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

const Team = () => {
    const team = [
        {
            name: 'member one',
            role: 'member one role',
            image: 'anon.png',
            links: [
                {
                    type: 'github',
                    link: 'url goes here'
                },
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member two',
            role: 'member two role',
            image: 'anon.png',
            links: [
                {
                    type: 'github',
                    link: 'url goes here'
                },
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member three',
            role: 'member three role',
            image: 'anon.png',
            links: [
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member four',
            role: 'member four role',
            image: 'anon.png',
            links: [
                {
                    type: 'github',
                    link: 'url goes here'
                },
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member five',
            role: 'member five role',
            image: 'anon.png',
            links: [
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member six',
            role: 'member six role',
            image: 'anon.png',
            links: [
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member seven',
            role: 'member seven role',
            image: 'anon.png',
            links: [
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        },
        {
            name: 'member eight',
            role: 'member eight role',
            image: 'anon.png',
            links: [
                {
                    type: 'linkedin',
                    link: 'url goes here'
                }
            ]
        }
    ]

    return (
        <div id='team' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='mb-5 container d-none'>
            <h1 className='section-header'># Our Team</h1>
            <hr className='my-3 col-md-6'/>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {team.map(member => <Member key={member.name} member={member} />)}
            </Row>
        </div>
    )
}

export default Team
