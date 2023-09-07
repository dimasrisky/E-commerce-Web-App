import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { checkoutContext, notifCheckout } from '../context/Context'

const Navbar = () => {
  const { checkout } = useContext(checkoutContext)
  const { toggle, setToggle } = useContext( notifCheckout )

  // Untuk Memunculkan notif checkout
  useEffect(() => {
    setTimeout(() => {
      setToggle(false)
    }, 3000)
  }, [ toggle ])

  return (
    <>
    <nav className='w-full bg-nav fixed top-0 z-50'>
      <div className='w-[85%] flex flex-row justify-between mx-auto items-center py-4'>
        <NavLink to={'/'}><img src={'../../public/img/logo/logo.png'} alt="logo" /></NavLink>
        <ul className='font-jomolhari text-white flex gap-9 items-center'>
          <NavLink to={'/'} className='hover:text-blue-400 hover:underline'>Home</NavLink>
          <NavLink to={'products'} className='hover:text-blue-400 hover:underline'>Product</NavLink>
          <NavLink to={'cart'} className='relative bg-white px-1 py-1 rounded-full'>
            {toggle && <p className='absolute text-[10px] bg-red-600 w-[10rem] rounded- p-1 text-center font-inter -top-[1rem] -left-[9.5rem]'>Item Telah Dimasukkan...</p>}
            <img src="../../public/img/icon/cart.png" alt="cart" width='18px' />
            <span className='bg-red-600 text-white text-[10px] px-[5px] rounded-full absolute -top-1 -right-1'>{ checkout }</span>
          </NavLink>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar