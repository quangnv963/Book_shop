import React from 'react'
import Xlogo from '../assets/close.png'
import { useShopCart } from '../context/ShopCartContext'
import { useOneProductQuery } from '../hook/Product'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useLogin } from '../context/LoginContext'
import LoginGoogle from './LoginGoogle'

type Props = {}

const Login = () => {
    const { closeLogin } = useLogin()
    let quan = 0
    return (
        <div className="fixed inset-0 bg-white w-1/4 h-[500px] z-10 left-1/2 transform -translate-x-1/2 rounded-2xl">
            <div className='flex justify-between items-center font-bold text-black mt-[120px] text-[24px] rounded-xl bg-[#5DADE2]'>
                <p className='p-5'>Đăng nhập vào Book49</p>
                <img onClick={closeLogin} className='m-5 w-[30px] h-[30px] hover:bg-[red] hover:cursor-pointer' src={Xlogo} alt="" />
            </div>
            <div className='w-[1000px] overflow-hidden'>
                <LoginGoogle/>
            </div>
        </div>
    )
}

export default Login