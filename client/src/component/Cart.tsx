import React from 'react'
import Xlogo from '../assets/close.png'
import { useShopCart } from '../context/ShopCartContext'
import { useOneProductQuery } from '../hook/Product'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

type Props = {}

const Cart = () => {
  const {closeCart, cartItem, increaseItemQuantity,cartPrice} = useShopCart()
  let quan = 0
  return (
    <div className="animate-slide-in fixed inset-0 bg-[#3498DB] h-screen w-1/3 left-auto right-0 z-10">
      <div className='flex justify-between items-center font-bold text-black mt-[120px] text-[42px] bg-[#5DADE2]'>
        <p className='p-5'>Shopping Cart</p>
        <Link to='/order'><p className='text-[27px] p-3 bg-red-600 rounded-lg hover:cursor-pointer hover:bg-red-900'>Đặt hàng</p></Link>
        <img onClick={closeCart} className='m-5 w-[60px] h-[60px]' src={Xlogo} alt="" />
      </div>
      <div  className="grid grid-cols-3 p-3 items-center w-full m-3">
        <p>Sản phẩm</p>
        <p>Số lượng</p>
        <p>Giá tiền</p>
      </div>
      <div className='overflow-y-auto h-[480px]'>
        {cartItem?.map((item, index)=>{
          return(
            <CartItem key={item.id} {...item}/>
          
          )
        })}
      </div>
      <p>Tổng số tiền:{cartPrice}</p>
    </div>
  )
}

export default Cart