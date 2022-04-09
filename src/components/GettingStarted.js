import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const Article = ({article}) => {
    return (
        <Col>
            <Card border='light' className='article-card'>
                <Card.Img className='square border border-3 border-dark mt-3' variant='top' src={article.image} />
                <Card.Body className='text-center'>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Link tag='a' href={article.link} target='_blank' rel='noreferrer' className='stretched-link' ><i>{article.linkName}</i></Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
} 


const GettingStarted = () => {
    const news = [
        {
            title: 'title 1',
            image: 'logo.png',
            linkName: 'link name',
            link: 'link goes here'
        },
        {
            title: 'title 2',
            image: 'logo.png',
            linkName: 'link name',
            link: 'link goes here'
        },
        {
            title: 'title 3',
            image: 'logo.png',
            linkName: 'link name',
            link: 'link goes here'
        },
        {
            title: 'title 4',
            image: 'logo.png',
            linkName: 'link name',
            link: 'link goes here'
        },
    ]
    
    return (
        <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='getting-started' className='mb-5 container'>
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
                        If you are looking for a hands on approach feel free to join us during our workshops and events!
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
