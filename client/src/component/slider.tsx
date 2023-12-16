import  { useState, useEffect } from 'react';
import React from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://149502452.v2.pressablecdn.com/wp-content/uploads/2021/05/the-best-startup-books.jpg',
    },
    {
      url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      url: 'https://img.freepik.com/free-vector/flat-social-media-cover-template-world-book-day-celebration_23-2150201450.jpg',
    },

    {
      url: 'https://www.shutterstock.com/image-vector/poster-banner-design-library-bookstore-260nw-1522828046.jpg',
    },
    {
      url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2018_29/2504731/180720-read-book-good-health-ac-417p.jpg',
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
    <div className='z-[1] relative xl:py-5 h-[150px] md:h-[300px] lg:h-[400px] xl:h-[600px] 2xl:h-[750px] w-full m-auto py-2 md:py-4 px-1 md:px-3 xl:px-6 group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
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
  );
}

export default Slider;