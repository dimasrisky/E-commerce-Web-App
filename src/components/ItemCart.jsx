import React from 'react'

const ItemCart = ({ id, title, price, image, handleDelete }) => {
  const idFromProduct = {
    id:id,
  }
  return (
    <>
        <div className='w-[85%] flex justify-between items-center'>
            <div className='flex gap-6 items-center'>
                <img src={ image } alt='item' width='30px' />
                <h1 className='text-md font-inter'>{ title }</h1>
            </div>
            <div className='flex items-center gap-8'>
                <p className='text-orange-600 text-sm'>${ price }</p>
                <button className='px-3 py-1 bg-red-600 hover:bg-red-400 rounded-lg text-white text-sm' onClick={() => handleDelete(idFromProduct)}>Delete</button>
            </div>
        </div>
    </>
  )
}

export default ItemCart