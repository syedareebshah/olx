import React from 'react';
import picture from './img.jpg'
import style from './banner.module.css';

function Banner() {
    return(
        <div>
           <img className={style.pic} src={picture} />
        </div>
    )
}
export default Banner;