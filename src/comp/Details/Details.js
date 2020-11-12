import React from 'react';
import style from './details.module.css'
import { Card, Carousel, Button } from 'react-bootstrap'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Ribbon from '../Ribbon/Ribbon';





function Details() {
    
    
    
    return (
        <div>
            
    
            <Header />
            <Ribbon />
            <div className={style.card} >

                <div className={style.pic}>
                    <div>

                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <Card body>
                            <h3>Details</h3>
                            <hr className={style.hr} />
                            <h3>Description</h3>
                            <p>
                                All Pakistan Cash On Delivery

                                Product details of SIDIA8 45 Styled 1500mAh E-Cigarette Starter Kit

                                Atomizer features:

                                Brass and glass construction

                                Top filling design

                                Glass tank

                                2.5ml juice capacity

                                Adjustable airflow control (2 air slots on the bottom)

                                510 threading connection

                                20mm overall diameter

                                Battery features:

                                Aluminum alloy construction

                                Power range: 10 - 45W

                                Output voltage: 3.2 - 4.2V

                                Charging current: 5V 1.5A

                                5 times click to on/off

                                Multiple protections designed for safe using

                                510 threading connection

                                Built-in 1500mAh battery

                                Micro-USB charging port
                        </p>

                        </Card>
                    </div>

                </div>

                <div className={style.right}>

                    <div className={style.subRight} >
                        <Card body>
                            <h3>Rs 3,000</h3>

                            <Card.Subtitle className="mb-2 text-muted">Card jSubtitle</Card.Subtitle>
                        </Card>

                    </div>
                    <div className={style.subRight}>
                        <Card body>
                            <h3>Seller description</h3>
                            <h4>Name</h4>
                            <Card.Subtitle className="mb-2 text-muted">Member since Nov 2017</Card.Subtitle>
                            <Button className={style.btn} >Chat with seller</Button>

                        </Card>

                    </div>
                    <div className={style.subRight}>
                        <Card body>
                            <h3>Posted in</h3>
                            <Card.Subtitle className="mb-2 text-muted"> DHA EME Sector, Lahore, Punjab</Card.Subtitle>


                            <iframe title="map" src="https://www.google.com/maps/@31.506432,74.3243776,12z" width="50%" height="50%">
                            </iframe>

                        </Card>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Details;