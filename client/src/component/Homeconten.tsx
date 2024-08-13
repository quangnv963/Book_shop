import React, { useState } from 'react'
import { IProduct } from '../types'
import { ICate } from '../types'
import { useProductCount, useProductQuery } from '../hook/Product'
import { useCateQuery } from '../hook/Category'
import {Link, useLocation} from 'react-router-dom'
import Slider from './slider'
import Skeleton from './skeleton'
import { useEffect } from 'react'
import cart from '../assets/trolley.png'
import { useShopCart } from '../context/ShopCartContext'

type Props = {}

const HomeProduct = (props: Props) => {
    const location = useLocation();
    const pageNum = new URLSearchParams(location.search).get('page');    
    // useEffect(()=>{
    //     const searchParams = new URLSearchParams(location.search);
    //     const page = searchParams.get('page');
    //     setPageNum(page)
        
    // },[location.search])
    const { isLoading:isCld, isError:isCe, data:cateData } = useCateQuery()
    const modifiedCateData = cateData as ICate[] | undefined;
    const { data:countData } = useProductCount()
    const {increaseItemQuantity, decreaseItemQuantity, getItemQuantity, removeFromCart} =useShopCart()
    const quantity = getItemQuantity
    const datafix = (countData:number) =>{
        let arr:number[] = []
        for(let i = 0; i < countData / 20 ; i++){
            arr.push(i + 1)
        }
        return arr
    }
    const { isLoading:isPld, isError:isPe, data:productData } = useProductQuery(pageNum)
    const numberPage = datafix(countData)
    const flyImage = (index:any) => {
        const imgDrag = document.querySelector(`#class-${index}`)
        if(imgDrag){

            const imgClone = imgDrag.cloneNode(true) as HTMLElement
            imgClone.style.opacity = '0.8'
            imgClone.style.position = 'absolute';
            imgClone.style.height = '0px';
            imgClone.style.width = '0px';
            imgClone.style.zIndex = '10';
            imgClone.style.top = `5px`;
            const imgOffset = imgDrag.getBoundingClientRect();
            console.log(window.scrollY)
            imgClone.style.left = `600px`;
            document.body.appendChild(imgClone);
             imgClone.animate(
                [
                  {
                    top: `${imgOffset.top + window.scrollY}px`,
                    left: `${imgOffset.left}px`,
                    width: '180px',
                    height: '240px',
                    opacity:1,

                  },
                  {
                    top: `${window.scrollY + 100}px`,
                    left: `1710px`,
                    width: '57px',
                    height: '76px',
                    opacity:0.6,
                  },
                ],
                {
                  duration: 1000,
                  easing: 'ease-in-out',
                }
              )
             
              
                
        }
        
    }
    if (isPld) return <Skeleton/>
    
    if (productData == false || productData == true) {
        console.log("123")
        return <Skeleton/>
    }

    return <div>
            <div className='flex mt-[100px] w-3/4 px-10 mx-auto'>
                <Link  to="/">Nhà Sách Book49</Link> <p>-</p> 
            </div>
            <div className='flex w-3/4 mx-auto p-10'>
                <div className='relative bg-white h-[100%] w-[35%] rounded-lg text-black mr-[30px]'>
                    <p className='text-[20px] font-semibold p-2 text-[#4d4d4d]'>Danh mục sản phẩm</p>
                    {modifiedCateData?.map((item, index)=>{
                        return(
                            <div key={index} className="p-3 w-full">
                                <p className='text-left text-[#4d4d4d]'>{item?.name}</p>
                            </div>
                        )
                    })}
                    <p className='text-[20px] font-semibold p-2 text-[#4d4d4d]'>Giá :</p>
                    <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1 rounded-[5px]'>Dưới 1000</p>
                    <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 1000 - 2000</p>
                    <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 2000 - 5000</p>
                    <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 5000 - 10000</p>
                </div>
                <div>
                    <Slider/>
                    <div className='flex'>{numberPage.map((item, i)=>{
                        return(
                            <Link to={`/?page=${item}`}><p className='px-3'>{item}</p></Link>
                        )
                    })}</div>
                    <div className="mx-auto grid grid-cols-4 gap-[30px] items-start mt-3">
                        {productData?.map((item, index)=>{
                            return(
                                <div key={index} className="bg-white relative rounded-lg p-5  w-full h-[440px] px-4 transform hover:scale-120">
                                    <div className='parent'><img src={item?.img} id={`class-${index}`} className= "child  w-full h-60 object-cover mb-6" /></div>
                                    <h2 className="text-[18px] font-normal text-[#2b2b2b] text-left leading-tight mb-2">{item?.name}</h2>
                                    <div className='flex absolute top-[90%]'>
                                        <p className='text-left'>{item?.price}đ</p>
                                        <div onClick={() => flyImage(index)}>
                                            <div onClick={() =>increaseItemQuantity(item?._id)} className='cart-btn flex absolute left-[90px] bg-blue-500 px-9 rounded-lg opacity-60 hover:opacity-90'>
                                                <button>Thêm</button>
                                                <img className='w-[30px]' src={cart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
}   

export default HomeProduct