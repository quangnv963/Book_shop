import React from 'react'

const Skeleton = () => {
    const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='w-3/4 mx-auto'>
        <div className='bg-white skeleton flex mt-[100px] w-3/4 h-[50px] px-10 mx-auto'></div>
        <div className='flex flex-row mt-[50px]'>
            <div className='relative bg-white h-[650px] w-[15%] rounded-lg text-black mr-[30px]'>
                <p className='text-[20px] w-[30px] font-semibold p-2 text-[#4d4d4d]'></p>
                <div className="p-3 w-full ">
                    <div className='w-[80%] h-[27px] rounded-lg skeleton my-3'></div>
                    <div className='w-[80%] h-[27px] rounded-lg skeleton my-3'></div>
                    <div className='w-[80%] h-[27px] rounded-lg skeleton my-3'></div>
                </div>
                <p className='text-[20px] font-semibold p-2 text-[#4d4d4d]'>Giá :</p>
                <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1 rounded-[5px]'>Dưới 1000</p>
                <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 1000 - 2000</p>
                <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 2000 - 5000</p>
                <p className='bg-[#EAE7E7] w-[70%] my-5 mx-3 p-1  rounded-[5px]'>Từ 5000 - 10000</p>
            </div>
            <div>
                <div className='h-[350px] w-[113%] skeleton'></div>
                <div className="mx-auto grid grid-cols-5 gap-[30px] items-start mt-3">
                    {arr?.map((item, index)=>{
                        return(
                            <div key={index} className="bg-white relative rounded-lg p-5  w-full h-[440px] px-4 transform hover:scale-120">
                                <div className=''><img src="" className="skeleton w-[200px] h-60 object-cover mb-6" /></div>
                                <div className="skeleton bg-white w-[80%] h-[27px] mb-2"></div><p className='absolute skeleton top-[90%] w-[40%] h-[27px] text-left'></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skeleton