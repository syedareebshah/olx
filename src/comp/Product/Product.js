import React from 'react';
import { Card, Row,Button } from 'react-bootstrap'
import style from './product.module.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Product(props) {

    
    
    
    const products = useSelector(state => state.thingToAdd )
    
    let objects = products

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
                                    <Card.Subtitle className="mb-2 text-muted">{obj.name}</Card.Subtitle>
                                    <Link to={`/${obj.name}`}><Button variant="primary">SHOW DETAIL</Button></Link>
                                </Card.Body>    
                            </Card>
                        </div>
                    )
                })}            
            </Row>
        </div>
    )
}



// const mapStateToProps = (state) =>({
//     products: state.thingToAdd,
//     user: state.userData
// })

// const mapDispatchToProp = (dispatch) =>({
//     set_data : (data)=> dispatch(set_data(data))
// })
export default Product;