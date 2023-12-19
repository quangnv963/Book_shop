import React from 'react'
import { IProduct } from '../types'
import { ICate } from '../types'
import { useProductQuery } from '../hook/Product'
import { useCateQuery } from '../hook/Category'
import {Link, useLocation} from 'react-router-dom'
import Slider from './slider'
type Props = {}

const HomeProduct = (props: Props) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    const page2 = page as any
    const { isLoading:isPld, isError:isPe, data:productData } = useProductQuery(page2)
    const modifiedProductData = productData as IProduct[] | undefined;
    const { isLoading:isCld, isError:isCe, data:cateData } = useCateQuery()
    const modifiedCateData = cateData as ICate[] | undefined;
    if (isPld) return <div>Loading...</div>
    if (isPe) return <div>Error....</div>
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
                    <div className="mx-auto grid grid-cols-5 gap-[30px] items-start mt-3">
                        {modifiedProductData?.map((item, index)=>{
                            return(
                                <div key={index} className="bg-white relative rounded-lg p-5  w-full h-[440px] px-4 transform hover:scale-120">
                                    <div className='parent'><img src={item?.img} className="child w-full h-60 object-cover mb-6" /></div>
                                    <h2 className="text-[18px] font-normal text-[#2b2b2b] text-left leading-tight mb-2">{item?.name}</h2><p className='absolute top-[90%] text-left'>{item?.price}đ</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
}   

export default HomeProduct