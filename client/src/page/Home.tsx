

import HomeProduct from '../component/Homeconten'
import React from 'react'
import Slider from '../component/slider'
import { Link } from 'react-router-dom'


type Props = {}

const HomePage = (props: Props) => {
    return <div>
        <p className='mt-200'>Hi hi</p>
        <p className='mt-200'>Hi hi</p>
        <p className='mt-200'></p>
        <p className='mt-200'>Hi hi</p>
        <p className='mt-200'>Đây là home</p>
        <Link to="/about">ha ha</Link>
        </div>
}

export default HomePage
