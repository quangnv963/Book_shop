import  { useState, useEffect } from 'react';
import React from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://www.shutterstock.com/shutterstock/photos/1790872166/display_1500/stock-vector-promo-sale-banner-for-library-bookshop-and-bookstore-a-large-number-of-books-stacked-in-piles-1790872166.jpg',
    },
    {
      url: 'https://www.shutterstock.com/image-vector/poster-banner-design-library-bookstore-260nw-1522828046.jpg',
    },
    {
      url: 'https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/banner_images/5130/original/Opera_Snapshot_2020-12-16_164540_www.architecture.com.jpg?1608137853',
    },

    {
      url: 'https://static.vecteezy.com/system/resources/previews/023/107/446/non_2x/promo-sale-banner-with-reading-stack-of-books-wooden-letter-tiles-school-books-pile-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-a4-for-poster-cover-vector.jpg',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/021/916/222/non_2x/promo-sale-banner-with-electronic-ebook-reader-stack-of-books-bow-plant-world-book-day-book-heap-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-vector.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Pass [] làm tham số thứ hai để chỉ chạy effect này một lần sau khi component mount

  
  return (
    <div className='bg-white rounded-xl p-4'>
        <div><p className='text-[#474747] text-[26px]'>Nhà Sách Book49</p></div>
          <div className='z-[1] relative xl:py-2 h-[150px] md:h-[230px] lg:h-[270px] xl:h-[310px] 2xl:h-[350px] w-[100%] m-auto py-2 px-1 group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-xl bg-center bg-cover duration-500'
        ></div>
    
        <div className='flex justify-center py-1 absolute top-[90%] w-[150px] right-[30%] md:right-[40%] 2xl:right-[48%] lg:top-[92%] translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 text-white cursor-pointer'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
              
            >
              <p className='hidden'>{slide.url}</p>
            <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className='flex'>
        <p className='p-2 text-[20px] font-light text-[#474747]'>Hàng mới nhất</p>
        <p className='p-2 text-[20px] font-light text-[#474747]'>Giá từ thấp đến cao</p>
        <p className='p-2 text-[20px] font-light text-[#474747]'>Giá từ cao đến thấp</p>
      </div>
    </div>
  );
}

export default Slider;