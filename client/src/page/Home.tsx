

import HomeProduct from '../component/Homeconten'
import React from 'react'
import Slider from '../component/slider'


type Props = {}

const HomePage = (props: Props) => {
    return <div>
        <Slider/>
        <HomeProduct />
        </div>
}

export default HomePage
