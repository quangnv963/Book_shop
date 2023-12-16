import React from 'react'
import { IProduct } from '../types'
import { useProductQuery } from '../hook/Product'
type Props = {}

const HomeProduct = (props: Props) => {
    const { isLoading, isError, data } = useProductQuery()
    const modifiedData = data as IProduct[] | undefined;
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error....</div>
    return <div>
        <h2 className='text-center font-bold font-serif'>NEW PRODUCT</h2>
        <div className="container max-w-4xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">
			{modifiedData?.slice(-10).reverse().map((item, index)=>{
                return(
                    <div key={index} className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
                        <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" className="w-full h-64 object-cover mb-6" />

                        <h2 className="text-xl leading-tight mb-2">{item?.name}</h2><p>Desc: {item?.desc}</p>
                        <p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</p>
				    </div>
                )
            })}
		</div>
    </div>
}

export default HomeProduct