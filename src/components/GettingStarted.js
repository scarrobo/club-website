import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const Article = ({article}) => {
    return (
        <Col>
            <Card border='light' className='article-card mt-3 mb-3'>
                <Card.Img className='border border-3 border-light' variant='top' src={article.image} />
                <Card.Body className='text-center'>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Link tag='a' href={article.link} target='_blank' rel='noreferrer' className='stretched-link' ></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
} 


const GettingStarted = () => {
    const news = [
        {
            title: 'October News Letter',
            image: 'NL_Oct2021.png',
            link: 'NL_Oct2021.pdf'
        },
        {
            title: 'July News Letter',
            image: 'NL_July2021.png',
            link: 'NL_July2021.pdf'
        },
        {
            title: 'June News Letter',
            image: 'NL_June2021.png',
            link: 'NL_June2021.pdf'
        },
        {
            title: 'May News Letter',
            image: 'NL_May2021.png',
            link: 'NL_May2021.pdf'
        },
    ]
    
    return (
        <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='getting-started' className='container mb-2'>
            <h1 className='section-header'># Getting Started</h1>
            <hr className='my-3 col-md-9'/>
            <div className='row gs-event-jumbotron w-100'>
                <div className='col-md-7'>
                    <h2 className='mb-4'>Want to Learn More?</h2>
                    <p className='mb-4'>
                        If you are interested in learning more there are many resources you can use to get started with robotics!
                        One great resource, provided by the University of Toronto is Coursera. Coursera is a massive open online course provider 
                        which UofT students have access to, you can use Coursera to get started with Arduino and Raspberry Pi.
                        Other great resources are available as well, such as edu.learnrobotics.org and the Intro to Robotics course from Stanford University.
                        If you are looking for a hands on approach, feel free to join us during our workshops and events!
                    </p>
                    <a href='https://onlinelearning.utoronto.ca/coursera/' className='btn btn-outline-success btn-lg me-2 mb-2' target='_blank' rel='noreferrer'>UofT Coursera</a>
                    <a href='https://edu.learnrobotics.org/' className='btn btn-outline-success btn-lg me-2 mb-2' target='_blank' rel='noreferrer'>Learn Robotics</a>
                    <a href='https://see.stanford.edu/course/cs223a' className='btn btn-outline-success btn-lg mb-2' target='_blank' rel='noreferrer'>Stanford Robotics</a>
                </div>
                <div className='col-md-5 text-center d-none d-md-inline'>
                    <img className='w-100 square gs-event-img' src='uoft.png' alt='logo' />
                </div>
            </div>
            <h2 className='news mb-3'>News</h2>
            <Row xs={1} md={2} lg={4} className='mx-auto'>
                {news.map(article => <Article key={article.title} article={article} />)}
            </Row>
        </div>
    )
}

export default GettingStarted
