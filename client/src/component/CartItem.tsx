import React, { useState,useEffect } from 'react'
import { useOneProductQuery } from '../hook/Product'
import { useShopCart } from '../context/ShopCartContext'

type Props = {
    id:string,
    quantity:number
}

const CartItem = ({id, quantity}: Props) => {
    const {increaseItemQuantity, decreaseItemQuantity,SetcartPrice} = useShopCart()
    const {isError, isLoading, data} = useOneProductQuery(id)
    const [price, setPrice] = useState(0)
    useEffect(() => {
        if (data) {
            const newPrice = data.price * quantity;
            setPrice(newPrice)
            SetcartPrice((prevPrice: number) => prevPrice + newPrice)
        }
    }, [data, quantity]);    
    if(data == undefined){
        return
    }
                               
    
  return (
        <div>
            <div  className="grid grid-cols-3 bg-white rounded-lg p-3 items-center  w-full h-[210px] m-3">
                <div>
                    <img src={data?.img} className="w-[60%] h-[150px] object-cover " />
                    <h2 className="text-[18px] font-normal text-[#2b2b2b] text-left leading-tight">{data?.name}</h2>
                </div>
                <div  className='flex text-center '>
                    <button onClick={() =>increaseItemQuantity(data?._id)}>+</button>
                    <p className='mx-3'>{quantity}</p>
                    <button onClick={() =>decreaseItemQuantity(data?._id)}>-</button>
                </div>
                <div className='flex'>
                    <p>{price}</p>
                </div>
            </div>
        </div>
  )
}

export default CartItem