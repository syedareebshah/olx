import React, { useState } from 'react';
import style from './form.module.css'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { set_data } from '../../store/actions/index'
import { useDispatch } from 'react-redux';


function Form(props) {
    const [state, setState] = useState()
    const { register, handleSubmit } = useForm();
    const getData = (data) => {
        setState(data)
    }

    return (
        <div className={style.body}>
            <h2 className={style.head}>Welcome To Seller Dashboard</h2>
            <form onSubmit={handleSubmit(getData)}>
                <h4>Name</h4>
                <input type="text" name="name" placeholder="Enter your Name" ref={register} /> <br />
                <h4>Address</h4>
                <input type="text" name="Location" placeholder="Enter your address " ref={register} /><br />
                <h4>Product Name</h4>
                <input type="text" name="productName" placeholder="Enter Product Name" ref={register} /><br />
                <h4>Price</h4>
                <input type="number" name="price" placeholder="Enter Price" ref={register} /><br />
                <h4>Image</h4>
                <input name="url" placeholder="Image Url" ref={register} /><br />
                <h4>Description</h4>
                <textarea placeholder="Description" name="desc" ref={register} /> <br />

                <input type="submit" />
            </form>
            <br />
            <button onClick={() => props.set_data(state)}>Post ADD</button>
            <br />
            <br />
            <h6>NOTE: When yo will press Post ADD button it will give you an error bcz i have not applied Applay middleware... </h6>
            <h6>but when i applay middleware, i get this entered data in reducer file on pressing ADD POST, but data in product.js becomes undefined,Therefore i have removed applay middleware so that application could run. i am learning redux more so that i can get rid of this error.</h6>
            <h6>InshaAllah till HACKATHON i will have Strong grip on Redux</h6>
        </div>
    )
}




const mapDispatchToProp = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})
export default connect(null, mapDispatchToProp)(Form);
