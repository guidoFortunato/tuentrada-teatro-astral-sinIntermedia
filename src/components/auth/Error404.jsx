import React from 'react'
import './error404.css'
import error404 from '../../img/error404.jpg'

const Error404 = () => {
    return (
        <div className='error404-container'>
            <img src={error404} alt="error 404" />     
        </div>
    )
}

export default Error404
