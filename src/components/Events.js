import React from 'react'


const Events = () => {
    return (
        <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='events' className='mb-5 container'>
            <h1 className='section-header'># Events</h1>
            <hr className='my-3 col-md-6'/>
            <div className='row gs-event-jumbotron'>
                <div className='col-md-7 d-inline'>
                    <h2 className='mb-4'>Robotics Workshop</h2>
                    <p className='mb-4'>
                        Join us
                    </p>
                    <a href='/#' className='btn btn-outline-success btn-lg col-md-4'>Sign Up Here!</a>
                </div>
                <div className='col-md-5 text-center d-none d-md-inline'>
                    <img className='w-100 square border border-3 border-dark gs-event-img' src='logo.png' alt='logo' />
                </div>
            </div>
            <div className='d-none row justify-content-center mt-4'>
                <div id="event-carousel" className="carousel carousel-dark slide shadow" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#event-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Past Event 1"></button>
                        <button type="button" data-bs-target="#event-carousel" data-bs-slide-to="1" aria-label="Past Event 2"></button>
                        <button type="button" data-bs-target="#event-carousel" data-bs-slide-to="2" aria-label="Past Event 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="temp-bg.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Past Event 1 label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="temp-bg.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Past Event 2 label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="temp-bg.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Past Event 3 label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#event-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#event-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Events
