import React from 'react';
import { Card, Row,Button } from 'react-bootstrap'
import style from './product.module.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { set_data } from '../../store/actions/index'


function Product(props) {

    console.log("Haye", props.products, )
    
    let objects = props.products

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
            {/* <Button onClick={()=>props.set_data("mera data")}>HYYY</Button> */}
        </div>
    )
}



const mapStateToProps = (state) =>({
    products: state.thingToAdd,
    
})

// const mapDispatchToProp = (dispatch) =>({
//     set_data : (data)=> dispatch(set_data(data))
// })
export default connect(mapStateToProps,null)(Product);