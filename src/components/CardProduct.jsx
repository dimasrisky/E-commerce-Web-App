import React from 'react'

const CardProduct = ({ id, title, price, image, clickCart }) => {

  let randomNumber = Math.random()
  const item = {
    id:randomNumber,
    title,
    price,
    image
  }
  
  return (
    <>
        <div className='w-[18rem] bg-white p-3 flex flex-col justify-between gap-3 shadow-[5rem] hover:scale-110 hover:transition duration-200'>
            <img src={image} alt="img" className='mx-auto w-[8rem]' value={image} />
            <div className='w-[95%] mx-auto'>
                <h1 className='text-sm font-semibold font-inter'>{ title }</h1>
                <p className='text-xs text-orange-600'>${ price }</p>
            </div>
            <button className='bg-[#1C181C] hover:bg-slate-700 w-[95%] mx-auto text-white py-2 rounded-lg' value={id} onClick={() => clickCart(item)} >Add To Cart</button>
        </div>
    </>
  )
}

export default CardProduct