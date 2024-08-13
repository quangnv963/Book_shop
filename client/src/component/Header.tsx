import React from 'react';
import  { useState } from 'react';
import logo from '../assets/logobook.jpg'
import cart from '../assets/cart.png'
import menu from '../assets/icons8-menu.svg'
import close from '../assets/icons8-x-48.png'
import { Link } from 'react-router-dom';
import { useShopCart } from '../context/ShopCartContext';


const Header = () => {
  const [navBar, setNavBar] = useState(false)  
  const {cartQuantity} =useShopCart()
  
 const {openCart} = useShopCart()
  return (
    <header>
      <div className='z-[11] fixed w-full bg-[white] px-[20px] md:px-[30px] xl:px-[50px] 2xl:px-[100px] top-[0] nav flex justify-between items-center h-[120px]'>
        <div className="logo w-[50px] sm:w-[70px] lg:w-[100px] xl:w-[120px] h-[-60px]">
          <a href="/"><img className='w-full' src={logo} alt="" /></a>
        </div>
        <div className="menu">
          <div className="w-[50px] block xl:hidden">
            <img onClick={()=>{setNavBar(!navBar)}} className='w-full hover:cursor-pointer' src={menu} alt="" />
          </div>
          <ul id='navmobile' className={navBar ? 'z-[2] block absolute top-[0px] right-[0px] bg-[#007bff] w-full h-[400px] text-center xl:hidden' : 'hidden'}>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><Link to="/home">Trang chủ</Link> </li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href="">Sản phẩm</a></li>
            <li className="xl:px-6 2xl:px-8v first-letter:cursor-pointer hover:bg-[white]"><a href="">Tài khoản</a></li>
            <img onClick={()=>{setNavBar(false)}} className="absolute hover:cursor-pointer top-[1px] right-[1px]" src={close} alt="" />       
          </ul>
          <ul className="hidden xl:flex  text-[#4A4A4A] font-sans xl:text-[16px] 2xl:text-[24px]">
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><Link to="/home">Trang chủ</Link></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><a href="">Tài khoản</a></li>
            <li className="xl:px-6 2xl:px-8 hover:cursor-pointer hover:text-[#007bff]"><div className='relative'>
              <img onClick={openCart} className='w-[50px]' src={cart} />
              <p className='absolute top-[26px] left-7 bg-[red] px-[11px] pt-1 rounded-[50%] text-white text-[19px] w-[35px]'>{cartQuantity}</p></div></li>       
          </ul>
        </div>
      </div>
      <div className='h-[1.5px] w-full bg-[#D0D0D0] mt-5'></div>
    </header>
  );
}
export default Header;
