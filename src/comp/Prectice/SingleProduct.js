import React from 'react';
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import style from '../Details/details.module.css'
import { Card, Carousel, Button } from 'react-bootstrap'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Ribbon from '../Ribbon/Ribbon';





function SingleProduct() {

    var { name } = useParams();
    const productItem = useSelector(state => state.thingToAdd)
    console.log(productItem)
    const itemsList = productItem.map(a => a.name)
    const a = itemsList.indexOf(name)
    const itemNum = productItem[a]
    console.log("list",itemsList)
    console.log(itemNum)
    console.log(name,a)

    if (!itemNum) {
        return <h1>Not Found at this URL</h1>
    }

    let { price, imgUrl } = itemNum
    console.log(price)
    
    
    
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
                                    src={imgUrl}
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
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                            Details provided by the user will be shown here.
                                
                        </p>

                        </Card>
                    </div>

                </div>

                <div className={style.right}>

                    <div className={style.subRight} >
                        <Card body>
                         <h3>Rs {price}</h3>

                       <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
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
export default SingleProduct;