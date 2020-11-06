import React from 'react';
import { Card, Row,Button } from 'react-bootstrap'
import style from './product.module.css'
import { Link } from "react-router-dom";


function Product() {
    
    let objects = [
        { imgUrl: "https://i.ytimg.com/vi/_adJBzQgfsg/hqdefault.jpg", price: "200", desc: "Mehran" },
        { imgUrl: "https://gcn.com/-/media/GIG/EDIT_SHARED/Military/F16.jpg", price: "550", desc: "F16" },
        { imgUrl: "https://i.ytimg.com/vi/qeffmkpa98I/hqdefault.jpg", price: "37.5", desc: "Taj Mehal" },

        { imgUrl: "https://www.danfoss.com/media/7007/burj_khalifa_case_story_1120x747.jpg", price: "150", desc: "Burj Khalifa" },
        { imgUrl: "https://i.ytimg.com/vi/eSMrFgZPpdY/hqdefault.jpg", price: "A Cup of Tea", desc: "AbiNAndan" },
        { imgUrl: "https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2018/07/d1499587-afad-4bde-98a1-439054bf2ed0.jpg", price: "1000", desc: "Dilo Ka Wazeer e Azam" },
        { imgUrl: "https://cnet1.cbsistatic.com/img/_qDPxqXKaC5iqAhCWbLxjhQHwoQ=/940x0/2020/10/13/603381b2-02f0-4688-9b47-e3ab991e9ff6/screen-shot-2020-10-13-at-2-04-50-pm-2.png", price: "1 Kidny", desc: "IPhone 12" },
        { imgUrl: "https://i.pinimg.com/236x/91/98/4b/91984bd95e66f851b9b85aec8a1b73bf.jpg", price: "350", desc: "Gold Watch" }
    ]

    return (
        <div className={style.card} >
            <h2>
            
                Based on your last search
            </h2>
            
            <Row>
                {objects.map((obj, ind) => {
                    return (
                        <div className={style.child}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body key={ind} >
                                    <img height="200px" width="250px" src={obj.imgUrl}  alt="Picture" />
                                    <Card.Title> Rs {obj.price}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{obj.desc}</Card.Subtitle>
                                
                                    <Button><Link className={style.btn} to="/details">Details</Link></Button>
                                    
                                </Card.Body>
                                
                            </Card>
                        </div>
                    )
                })}
                
            </Row>
        </div>
    )
}
export default Product;