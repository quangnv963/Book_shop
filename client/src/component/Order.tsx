import React from 'react'
import Xlogo from '../assets/close.png'
import { useShopCart } from '../context/ShopCartContext'
import { useOneProductQuery } from '../hook/Product'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import CartItemOrder from './CartItemOrder'

type Props = {}

const OrderPage = () => {
	const { cartItem, cartPrice} = useShopCart()
	return (
		<div className="m-[300px] ">
			<div className='text-center font-bold text-black mt-[120px] text-[42px]'>
				<p className='p-5'>Order</p>
			</div>
			<div className='grid grid-cols-2 gap-x-[150px]'>
				<div>
					<div className="grid grid-cols-3 gap-4 w-full">
						<div className="flex justify-center items-center h-full"> 
							<p className="text-center">Sản phẩm</p> 
						</div>
						<div className="flex justify-center items-center h-full"> 
							<p className="text-center">Số lượng</p> 
						</div>
						<div className="flex justify-center items-center h-full"> 
							<p className="text-center">Giá tiền</p> 
						</div>
					</div>
					<div className=''>
						{cartItem?.map((item, index)=>{
						return(
							<CartItemOrder key={item.id} {...item}/>
						)
						})}
					</div>
					<p>Thành tiền:{cartPrice} đ</p>
				</div>
				<div className=''>
					<form action="">
						<h2 className=''>Phương thức thanh toán</h2>
						<div>
						<input type="radio" id='html' value="Thanh toán khi nhận hàng"/>
						<label htmlFor="html">Thanh toán khi nhận hàng</label>
						</div>
						<div>
						<input type="radio" id='html' value="Thanh toán online"/>
						<label htmlFor="html">Thanh toán online</label>
						</div>
						<div>
						<p>Phí vận chuyển: 30000 đ</p>
						<p>Tỏng số tiền: {cartPrice + 30000}</p>
						</div>
					</form>
				</div>
			</div>
		</div>
  )
}

export default OrderPage