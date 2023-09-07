import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section id='home'>
        <div className='flex flex-row justify-center gap-[12rem] items-center w-[85%] h-[100vh] mx-auto'>
          <div className='flex flex-col gap-5 font-jomolhari text-white'>
            <h1 className='text-[3.5rem]'>Explore <br /> Our Best Products</h1>
            <NavLink to='products' className='w-[10rem] text-center rounded-md py-2 bg-[#D9D9D9] hover:bg-white text-black font-jomolhari'>Explore</NavLink>
            <div className='flex gap-12 items-center mt-4'>
              <img src="../../public/img/icon/facebook.png" alt="facebook" width='30px'/>
              <img src="../../public/img/icon/twitter.png " alt="twitter" width='30px'/>
              <img src="../../public/img/icon/instagram.png" alt="instagram" width='30px' />
            </div>
          </div>
          <img src="../../public/img/icon/cart-icon.png" alt="cart" width='400px' className='rotate-[18deg]'/>
        </div>
      </section>
    </>
  )
}

export default Home