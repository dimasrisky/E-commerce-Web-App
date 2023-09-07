import React, { useContext, useState, useEffect } from 'react'
import ItemCart from '../components/ItemCart'
import { productCheck, checkoutContext } from '../context/Context'

const Cart = () => {
  const [price, setPrice] = useState()
  const { productCheckout, setProductCheckout } = useContext( productCheck )
  const { setCheckout } = useContext( checkoutContext )

  // Untuk Mendelete product yang di checkout
  const handleDelete = ( id ) => {
    setProductCheckout(productCheckout.filter(item => item.id != id.id))
    setCheckout(prev => prev - 1)
  }

  // Untuk mentotalkan harga dari produk yang di checkout
  useEffect(() => {
    const priceFromProduct = productCheckout?.map(eachItem => eachItem.price).reduce((prev, curr) => prev + curr, 0)
    setPrice(priceFromProduct)
  }, [productCheckout])

  const deleteAllItem = () => {
    setProductCheckout([])
    setCheckout(0)
  }

  return (
    <>
      <div className='w-[65%] bg-white mx-auto flex flex-col mt-[10%]'>
        <div className='flex justify-center gap-[60%] w-full items-center border border-b-black'>
          <div className='py-2 font-jomolhari text-center'>Cart Items</div>
          <button className='text-white text-xs font-inter px-5 py-2 rounded-md bg-red-600 hover:bg-red-500 transition duration-200' onClick={deleteAllItem} >Delete All</button>
        </div>
        <div className='flex flex-col gap-10 items-center p-7'>
          {/* Map semua product */}
          {productCheckout?.map(eachItem => <ItemCart key={eachItem.id} id={eachItem.id} title={eachItem.title} price={eachItem.price} image={eachItem.image} handleDelete={handleDelete} />)}
        </div>
        <div className='py-2 font-jomolhari border-t-slate-800 border w-full flex justify-center gap-[30rem] text-center'>
          <h1 className='text-xl'>Total Price</h1>
          <h1 className='text-xl text-black font-inter'>${ price }</h1>
        </div>
      </div>
    </>
  )
}

export default Cart